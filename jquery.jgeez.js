/*
Author : Samuel Teklu Cherinet
Version : 1.0.0.0
Date : Feb 25, 2012
Description : this is a jGeez plugin source code(development version). the library
helps users type geez literals directly on their browsers. for further detail please
refer to the official jGeez site at this address, http://www.jgeez.com
*/


//character class definition
//an object model that represents a single geez character in a given textbox control
function Character(EnglishString,ShiftKey,Index) {
    _englishString=EnglishString;
    _shiftKey=ShiftKey;
    _Index=Index
    return {
        //the english string(one or two characters) that has been translated to a single geez letter
        englishString: _englishString,
        //a flag the shows if a shiftkey was pressed during the capturing of the key stroke
        //this information is vital in determining if capslock was on 
        shiftKey: _shiftKey,
        //index of this letter on the HTML Textbox
        //this information is used when printing amharic letters
        index: _Index
    };
}

//a namespace used in classifying and defining functions and constants used in this plugin
var JGeezUtility = {
    //determines if the asciicode falls in the range of characters set aside as modifier
    //modifier in this plugin scope is a character used to modify a root character to different
    //sounds of the same category 
    //JGeezUtility.isModifier
    isModifier: function (ch) {
        for (mod in JGeezUtility.UNICODEModifierMatrix)
            if (ch == JGeezUtility.UNICODEModifierMatrix[mod][0])
                return true;
        return false;
    },
    //converts an english string and optionally a modifier
    //uses a matrix of predfined character combinitions to return the correct
    //geez letter for a given combination
    //JGeezUtility.UNICODE
    UNICODE: function (ch) {
        //locally identify the variables that will be used in the conversion
        _root = ch.englishString.substr(0, 1);
        _modifier = ch.englishString.substr(1, 1);
        _shift = ch.shiftKey;
        _caps = (_shift && (_root.charCodeAt(0) > 96)) || (!_shift && (_root.charCodeAt(0) <= 96));

        //first get all the unicodes that correspond to this character
        //make sure all the unicodes are selected regardless of the letter case
        //or if shift was pressed or caps was on since this option tries to do
        //closest match to the criteria
        _matches = Array();
        _rootlower = _root.toLowerCase();
        for (i in JGeezUtility.UNICODEMatrix) {
            //provide a set value for  measuring resemblence
            _resemblence = 100;
            //create a local copy of the mapping data to avoid indexing the array every time
            _currentunicode = JGeezUtility.UNICODEMatrix[i];
            //check if the string matches regardless of the letter case
            if (_currentunicode[1].toLowerCase() == _rootlower) {
                //reduce the resemblence if the cases doesn't  match
                if (_currentunicode[1] != _root)
                    _resemblence -= 20;
                //reduce the resemblence if the mapping requires the shift key
                //this will be offsetted if the shift key matches
                if (_currentunicode[2]!=null)
                    _resemblence -= 5;
                //increase the resemblence if the shift value matches the given character
                if (_currentunicode[2] == _shift)
                    _resemblence += 7;
                //reduce the resemblence if the mapping requires the capslock turned on/off
                //this will be offsetted if the capslock state matches
                if (_currentunicode[3]!=null)
                    _resemblence -= 5;
                //increase the resemblence if the capslock state matches the given character
                if (_currentunicode[3] == _caps)
                    _resemblence += 7;
                //add the information about the matched unicode to the matches collection
                _matches.push({ index: i, resemblence: _resemblence, unicode: _currentunicode[0] });
            }
        }

        //determine the unicode with highest resemblence to the key combination specified in the character
        var _maxmatch;
        for (_m in _matches) {
            if (!_maxmatch)
                _maxmatch = _matches[_m];
            else {
                if (_matches[_m].resemblence > _maxmatch.resemblence)
                    _maxmatch = _matches[_m];
            }
        }

        //get the unicode value from a predefined set of english to unicode mapping matrix
        var _rootUnicode;
        if(_maxmatch) _rootUnicode = _maxmatch.unicode;

        //if a modifier is defined in the character definition 
        //then modify the unicode by adding the modifying sound index (1-6)
        if (_rootUnicode
            && _modifier) {
            for (mod in JGeezUtility.UNICODEModifierMatrix)
                if (JGeezUtility.UNICODEModifierMatrix[mod][0] == _modifier)
                    _rootUnicode = _rootUnicode + JGeezUtility.UNICODEModifierMatrix[mod][1];
        }

        //if a valid unicode is retrieved from the matrix then return the character representation of the unicode
        if (_rootUnicode)
            return String.fromCharCode(_rootUnicode);

        return _root;
    },
    //constants used to save data on the HTML textbox
    //holds data about the currently pressed character
    //JGeezUtility.cIdx
    cIdx: "c_Ch",
    //holds data about the letter that is currently being evaluated
    //for example an modified geez character
    //JGeezUtility.aIdx
    aIdx: "a_Ch",
    //a helper namespace
    //JGeezUtility.Print
    Print: {
        //checks if a given character is printable/can be converted to geez
        //JGeezUtility.Print.isPrintable
        isPrintable: function (ASCIICode) {
            return (ASCIICode >= 65 && ASCIICode <= 90)
            || (ASCIICode >= 97 && ASCIICode <= 122);
        },
        //JGeezUtility.Print.newCharacter
        //inserts the character in the HTML text box at a given index
        newCharacter: function (character, textbox) {
            //todo: looks like the to parameter of substr is not inclusive, test!!

            //get the strings that are on the left and right side of the character
            //this code is required in to make sure the user can start typing in the middle of a text

            //right side of the character
            rightstr = textbox.attr("value").substr(0, character.index);
            leftstr = "";

            //left side of the character
            if (character.index < textbox.attr("value").length)
                leftstr = textbox.attr("value").substr(character.index, textbox.attr("value").length - character.index);

            //combine the string and assign the final string to the textbox
            textbox.attr("value", rightstr + JGeezUtility.UNICODE(character) + leftstr);
            JGeezUtility.Caret.setPosition(textbox, character.index + 1);
        },
        //JGeezUtility.Print.replaceCharacter
        //relaces the character in the HTML text box at a given index
        replaceCharacter: function (character, textbox) {

            //get the strings that are on the left and right side of the character
            //this code is required in to make sure the user can start typing in the middle of a text

            //right side of the character
            rightstr = textbox.attr("value").substr(character.index + 1);
            leftstr = "";

            //left side of the character
            if (character.index < textbox.attr("value").length)
                leftstr = textbox.attr("value").substr(0, character.index);

            //combine the string and assign the final string to the textbox
            textbox.attr("value", leftstr + JGeezUtility.UNICODE(character) + rightstr);
            JGeezUtility.Caret.setPosition(textbox, character.index + 1);
        }
    },
    //JGeezUtility.Caret
    //this namespace holds the methods that are used to set the position of the 
    //caret (AKA cursor) in a given textbox
    Caret: {
        //gets the current position (index) of the caret in the text box
        getPosition: function (ctrl) {
            var CaretPos = 0;
            ctrl = ctrl[0];
            // IE Support
            if (document.selection) {
                ctrl.focus();
                var Sel = document.selection.createRange();
                Sel.moveStart('character', -ctrl.value.length);
                CaretPos = Sel.text.length;
            }
            // Firefox support
            else if (ctrl.selectionStart || ctrl.selectionStart == '0')
                CaretPos = ctrl.selectionStart;
            return (CaretPos);
        },
        //sets the current position (index) of the caret in the text box
        setPosition: function (ctrl, pos) {
            ctrl = ctrl[0];
            if (ctrl.setSelectionRange) {
                ctrl.focus();
                ctrl.setSelectionRange(pos, pos);
            }
            else if (ctrl.createTextRange) {
                var range = ctrl.createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        }
    }
};

//main plugin code
(
    function ($) {
        //plugin main function
        $.fn.jGeez = function(method){
            //this code ensure multiple method call using one plugin namespace
            if ( methods[method] ) {
              return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
            } else if ( typeof method === 'object' || ! method ) {
              return methods.init.apply( this, arguments );
            } else {
              $.error( 'Method ' +  method + ' does not exist on jQuery.jGeez' );
            }    
        };

        //methods that are available on text boxes
        var methods={
            //changes the pre-existing options on the plugin
            //is used after the plugin is initialized
            changeoptions:function(options){
                var _options=$.extend($(this).data("jGeez"),options);
                $(this).data("jGeez",options);
            },
            //initializes the textbox with all sorts of options
            //options definition
            //showtoggle:true/false
            //togglebutton
            //togleshortcut
            init:function (options) {
            //create default option values
            var options=$.extend({
                'showhelpbutton':false,
                'showtogglebutton':true,
                'enabled':true,
                'geezbutton':'',
                'englishbutton':'',
                'helpbutton':'',
                'toggleshortcut':'q'
            },options);

            $(this).data("jGeez",options);

            //show help button
            if(options.showhelpbutton){
                _help= $("#"+options.helpbutton);
                _help.bind('click',{txtbox:$(this)},function(event){
                    event.data.txtbox.focus();
                });
                _help.insertAfter($(this));
            }

            //is used to change the current mode of writing
            //and handles the UI change as well
            function toggle(txtbox){
                //load settings
                _options=txtbox.data("jGeez");
                __gbtn = $("#"+_options.geezbutton);
                __ebtn = $("#"+_options.englishbutton);
                _options.enabled=!_options.enabled;
                if(__ebtn&&__gbtn){
                    if(_options.enabled){
                        __ebtn.show();
                        __gbtn.hide();
                    }
                    else{
                        __ebtn.hide();
                        __gbtn.show();
                    }
                }
            }

            //show toggle button
            //get the toggle buttons
            if(options.geezbutton
                &&options.englishbutton)
                {
                _gbtn = $("#"+options.geezbutton);
                _ebtn = $("#"+options.englishbutton);
                //check both the toggle buttons have been specified at the plugin level
                if(_gbtn.length>0
                    &&_ebtn.length>0){
                        //on english button disable geez
                        _ebtn.bind('click',{txtbox:$(this)},function(event){
                            toggle(event.data.txtbox);
                            event.data.txtbox.focus();
                        });
                        //on geez button enable geez typing
                        _gbtn.bind('click',{txtbox:$(this)}, function(event){
                            toggle(event.data.txtbox);
                            event.data.txtbox.focus();
                        });

                        //if the show toggle button options is not selected hide both buttons
                        if(!options.showtogglebutton){
                            _ebtn.hide();
                            _gbtn.hide();       
                        }
                        else{
                        //ensure that only one button(either geez or english) is actively visible at anytime 
                            if(options.enabled){
                                _gbtn.hide();
                                _ebtn.show();
                            }
                            else{
                                _gbtn.show();
                                _ebtn.hide();
                            }
                        }
                    }
               }

            //shortcut toggle
            $(this).keyup(function(event){
            //load settings
            _options=$(this).data("jGeez");
            if(event.altKey
                    ||event.ctrlKey
                    ||!JGeezUtility.Print.isPrintable(event.which)){
                    //handle ctrl shortcut values(toggle)
                    if(String.fromCharCode(event.which).toLowerCase()==_options.toggleshortcut.toLowerCase())
                        toggle();
                }
            });

            $(this).keypress(function (event) {
            //load settings
                _options=$(this).data("jGeez");
                //check if the character pressed is printable
                //ignore anything that will not be displayed (alt,ctrl ...)
                //ignore key presses for short cut keys (combination of alt+key or ctrl+key)
                if(event.altKey
                    ||event.ctrlKey
                    ||!JGeezUtility.Print.isPrintable(event.which)){
                    //clear out any root character waiting for a modifier
                    $(this).data(JGeezUtility.aIdx,null);
                }
                else{
                    //if the plugin is disabled exit the event handler
                    if(!_options.enabled) return;
                    //instantiate new character object for the key that is pressed
                    var _cCh=Character(String.fromCharCode(event.which), event.shiftKey,JGeezUtility.Caret.getPosition($(this)));
                    //save this character object in the data cache
                    $(this).data(JGeezUtility.cIdx, _cCh);
                    //retrieve the active character object from the data cache
                    //the active character holds information on root characters that 
                    //are possibly waiting for a modifier 
                    var _aCh=$(this).data(JGeezUtility.aIdx);
                    
                    //if there is no active character waiting for a modifier
                    //or if the active character and the new key are not consecutive(which effictively means that they are not related)
                    //then copy the current character to active character cache
                    //print the key pressed to the screen
                    if(!_aCh
                    ||_aCh.index+1!=_cCh.index){
                        //copy current character to the active character
                        _aCh=Character(_cCh.englishString
                            ,_cCh.shiftKey
                            ,_cCh.index);
                        //save the active character to the data cache
                         $(this).data(JGeezUtility.aIdx, _aCh);
                         //print the new active character to the screen
                         JGeezUtility.Print.newCharacter(_aCh,$(this));
                    }
                    else{
                        //if there is an active character waiting to be modified proceed
                        //check if the current character is a modifier
                        if(JGeezUtility.isModifier(_cCh.englishString)){
                            //if modifier, then append the modifier character to the active character's english string
                            _aCh.englishString+=_cCh.englishString;
                            //and replace the unicode character that corresponds to the active character
                            //by a new unicode evaluated from the modified (root+modifier) version of the active character
                            JGeezUtility.Print.replaceCharacter(_aCh,$(this));
                            //clear out the active character data cache, since this character is no longer 
                            //eligible for modification
                            $(this).data(JGeezUtility.aIdx,null);
                        }
                        else{
                            //if the current character is not a modifier
                            //then copy the current character to the active character
                            _aCh=Character(_cCh.englishString
                                ,_cCh.shiftKey
                                ,_cCh.index);
                                $(this).data(JGeezUtility.aIdx, _aCh);
                            //print the new active character to the string
                            JGeezUtility.Print.newCharacter(_aCh,$(this));
                        }
                    }
                    //if a unicode value is some how displayed(new/replace print) then cancel the event from bubbling
                    //so that the default character is not displayed
                    event.preventDefault();
                }
            });
        }
      };
   }
)(jQuery);


//unicode matrix for modifiers
//this matrix describes which modifier will change the unicode character relative to the first letter in 
//geez alphabet
//for example h alone represents the first alphabet and any value added like 1 would change it to "hu" ...
//todo: add more description here
JGeezUtility.UNICODEModifierMatrix = [
    ['a', 3],
    ['e', 5],
    ['i', 2],
    ['o', 6],
    ['u', 1],
    ['y', 4],
    ['A', 3],
    ['E', 5],
    ['I', 2],
    ['O', 6],
    ['U', 1]
   ];

//unicode matrix for root characters
//this matrix describes the relationship/mapping of (english alphabet+shift+caps) the a geez unicode character
//shift and caps values are optional, meaning, if there is only one unicode related to an english alphabet
//then there is no need to identify the shift and caps, the algorith will take the clothest matching set
JGeezUtility.UNICODEMatrix=
[
    [0x1200, 'h'],
    [0x1208, 'l'],
    [0x1210, 'H',true],
    [0x1218, 'm'],
    [0x1220, 's',true,true],
    [0x1228, 'r'],
    [0x1230, 's'],
    [0x1238, 'S'],
    [0x1240, 'q'],
    [0x1260, 'b'],
    [0x1268, 'v'],
    [0x1270, 't'],
    [0x1278, 'c'],
    [0x1280, 'h',true,true],
    [0x1290, 'n'],
    [0x1298, 'N'],
    [0x12A0, 'x'],
    [0x12A8, 'k'],
    [0x12B8, 'h',true],
    [0x12C8, 'w'],
    [0x12D0, 'x'],
    [0x12D8, 'z'],
    [0x12E0, 'Z'],
    [0x12E8, 'Y'],
    [0x12F0, 'd'],
    [0x12F8, 'P'],
    [0x1300, 'j'],
    [0x1308, 'g'],
    [0x1320, 'T'],
    [0x1328, 'C'],
    [0x1338, 't', true, true],
    [0x1340, 'T',false,true],
    [0x1348, 'f'],
    [0x1350, 'P'],
    [0x12A0, 'a'],
    [0x12A1, 'u'],
    [0x12A2, 'i'],
    [0x12A4, 'e'],
    [0x12A6, 'o'],
    [0x12E8, 'y']
];