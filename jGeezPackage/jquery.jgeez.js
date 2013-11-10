﻿﻿﻿/*
Author : Samuel Teklu Cherinet
Version : 1.1.0.0
Date : April 25, 2012
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
    },
    //holds information about the client's font status(if the user has geez font installed on his computer)
    //by default it is assumed that the user does not have geez font installed
    //this variable will be set by jgeez when the document is loaded
    hasGeezFont:false,
    //holds data about all the instance of the elements on which jgeez has been applied to
    //this info is separted out of the element is because, information is lost when AJAX calls disrupt the DOM structure
    instances:[],
    //this method will bind events that are queued up for each of the jgeez instance elemetns on the page
    //it is particulary used to combat the issue of AJAX disrupting the events binding on the DOM
    bindEvents:function(){
    //go through all the event handlers and rebind them to the element jgeez plugin is applied on
    for(o in JGeezUtility.instances){
        //check if the event has already been handled
        //so that multiple event handlers wouldn't be bound to the element
        target=$(":[jgeez-index="+o+"]");
        if(!target.data("jgeez-event")){
            options=JGeezUtility.instances[o];
            for(e in options.eventHandlers){
                    options.eventHandlers[e].element.on(options.eventHandlers[e].event,
                    options.eventHandlers[e].data,
                    options.eventHandlers[e].handler);
                }
                target.data("jgeez-event",true)
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
                _options=JGeezUtility.instances[$(this).attr("jgeez-index")];
                _options=$.extend(_options,options);
                $(this).data("jGeez",_options);
            },
            //allows developers to reattach events that might be lost during an AJAX call
            reattachevents:function(){
            //go through all the event handlers and rebind them to the element
            options=JGeezUtility.instances[$(this).attr("jgeez-index")];
            //check if the event has already been handled
            //so that multiple event handlers wouldn't be bound to the element
            if(!$(this).data("jgeez-event")){
             for(e in options.eventHandlers){
                    options.eventHandlers[e].element.on(options.eventHandlers[e].event,
                    options.eventHandlers[e].data,
                    options.eventHandlers[e].handler);
                }
                 $(this).data("jgeez-event",true)
              }
            },
            //initializes the textbox with all sorts of options
            //options definition
            //showtoggle:true/false
            //togglebutton
            //togleshortcut
            init:function (options) {
            //create default option values
            var options=$.extend({
                'showhelpbutton':true,
                'showtogglebutton':true,
                'enabled':true,
                'geezbutton':'',
                'englishbutton':'',
                'helpbutton':'',
                'toggleshortcut':'q'
            },options);

            //hold reference to the event handlers
            options.eventHandlers=[];

            //add reference to the index of this textbox in the jgeez instance on the page
            $(this).attr("jgeez-index",JGeezUtility.instances.length);
            JGeezUtility.instances.push(options);

            //show help button
            if(options.showhelpbutton){
                _help= $("#"+options.helpbutton);
                _help.attr("href", "http://jgeez.com/home/help");
                _help.attr("target", "_blank");
            }

            //is used to change the current mode of writing
            //and handles the UI change as well
            function toggle(txtbox){
                //load settings
                _options=JGeezUtility.instances[txtbox.attr("jgeez-index")];
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
                        options.eventHandlers.push({
                            element:_ebtn,
                            event:'click',
                            data:{txtbox:$(this)},
                            handler:function(event){
                            toggle(event.data.txtbox);
                            event.data.txtbox.focus();
                            }
                        });

                        //on geez button enable geez typing
                         options.eventHandlers.push({
                            element:_gbtn,
                            event:'click',
                            data:{txtbox:$(this)},
                            handler:function(event){
                            toggle(event.data.txtbox);
                            event.data.txtbox.focus();
                            }
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
            options.eventHandlers.push({
            element:$(this),
            event:'keyup',
            handler:function(event){
                //load settings
                _options=JGeezUtility.instances[$(this).attr("jgeez-index")];
                if(event.altKey
                        ||event.ctrlKey
                        ||!JGeezUtility.Print.isPrintable(event.which)){
                        //handle ctrl shortcut values(toggle)
                        if(String.fromCharCode(event.which).toLowerCase()==_options.toggleshortcut.toLowerCase())
                            toggle($(this));
                    }
                }
            });


            options.eventHandlers.push({
            element:$(this),
            event:'keypress',
            handler:function (event) {
            //load settings
                _options=JGeezUtility.instances[$(this).attr("jgeez-index")];
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
            }
        });

        //attach the event handlers queued up for this handler
        for(e in options.eventHandlers){
                options.eventHandlers[e].element.on(options.eventHandlers[e].event,
                options.eventHandlers[e].data,
                options.eventHandlers[e].handler);
            }
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
    [0x124A, 'Q'],
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

﻿//root level attribute definition
var jGeezLibraryAttributes = {
    mode:{
        auto:'auto',
        manual:'manual'
    }
};

//elelment plugin level options
function jGeezAttributes(){
    return {
        enabled:        {name:'jgeez-enabled',value:true},
        englishbutton:  {name:'jgeez-englishbutton',value:""},
        geezbutton:     {name:'jgeez-geezbutton',value:""},
        showtogglebutton:{name:'jgeez-showtogglebutton',value:true},
        helpbutton:     {name:'jgeez-helpbutton',value:""},
        showhelpbutton: {name:'jgeez-showhelpbutton',value:true},
        toggleshortcut: {name:'jgeez-toggleshortcut',value:"q"},
        font:           {name:'jgeez-font',value:"jiret"}
    };
}

$(document).ready(function () {

    //detect if geez font exists
    //render the sample characters
    _scriptheader=$("script[src*='jgeez']");
    _mode =_scriptheader.attr("mode");
    var _geezattributes = jGeezAttributes();
    
    var _jg_random = Math.floor(Math.random() * 1000 + 1);
    $("body").append('<span id="s' + _jg_random + '" style="width:10px; font-size:30px;overflow:visible;">ሀ</span');
    $("body").append('<span id="s' + (_jg_random + 1) + '" style="width:10px; font-size:30px;overflow:visible;">መ</span');

    //check if the characters are rendered correctly by comparing their width
    //download geez font if the user doesn't have a font installed or opted out to use one of the fonts
    //shipped with jgeez
    _font=_scriptheader.attr(_geezattributes.font.name);
    if ($("#s" + _jg_random).width() == $("#s" + (_jg_random + 1)).width()
    || _font) {
        //if font not specified then assignt the default value
        if(!_font) _font=_geezattributes.font.value;
        //if not install geez
        $("<link>").appendTo($('head'))
                    .attr({ type: 'text/css', rel: 'stylesheet' })
                    .attr('href', 'http://www.jgeez.com/cdn/styles/'+_font+'/style.css');
    }
    
    //remove the sample characters
    $("#s" + _jg_random).remove();
    $("#s" + (_jg_random + 1)).remove();

    //add code to automatically relink events handlers upon ajax call completion
    $("body").ajaxComplete(function(){
        JGeezUtility.bindEvents();
    });

    if (_mode == jGeezLibraryAttributes.mode.auto) {
        //button styles
        var _buttonstyle = {
            'padding': '0px 6px',
            'font-weight': 'bold',
            'cursor': 'pointer',
            'margin-left': '1px',
            'text-decoration': 'none'
        };

        //find input elements that have jgeezenable attribute turned on/off
        _geezinputs = $("[jgeez-enabled='true']");
        if (_geezinputs.length == 0)
        //if no jgeez attributes are found then select all the input and textarea elements
            _geezinputs = $("input,textarea");

        _geezinputs.each(function () {

            //collect all the attribute info here
            //enabled
            if ($(this).is("[" + _geezattributes.enabled.name + "]"))
                _geezattributes.enabled.value = $(this).attr(_geezattributes.enabled.name) == "true";
            //englishbutton
            if ($(this).is("[" + _geezattributes.englishbutton.name + "]"))
                _geezattributes.englishbutton.value = $(this).attr(_geezattributes.englishbutton.name);
            //geezbutton
            if ($(this).is("[" + _geezattributes.geezbutton.name + "]"))
                _geezattributes.geezbutton.value = $(this).attr(_geezattributes.geezbutton.name);
            //showtogglebutton
            if ($(this).is("[" + _geezattributes.showtogglebutton.name + "]"))
                _geezattributes.showtogglebutton.value = $(this).attr(_geezattributes.showtogglebutton.name) == "true";
            //helpbutton
            if ($(this).is("[" + _geezattributes.helpbutton.name + "]"))
                _geezattributes.helpbutton.value = $(this).attr(_geezattributes.helpbutton.name);
            //showhelpbutton
            if ($(this).is("[" + _geezattributes.showhelpbutton.name + "]"))
                _geezattributes.showhelpbutton.value = $(this).attr(_geezattributes.showhelpbutton.name) == "true";
            //toggleshortcut
            if ($(this).is("[" + _geezattributes.toggleshortcut.name + "]"))
                _geezattributes.toggleshortcut.value = $(this).attr(_geezattributes.toggleshortcut.name);

            //if jgeez is disabled then don't apply geez typing on it
            //if the input is a non-text input skip to the next element
            if (!_geezattributes.enabled
                || ($(this).is("input")
                    && $(this).attr("type") != undefined
                    && $(this).attr("type") != "text"))
                return;

            //if help button is enabled prepare the helpbutton
            if (_geezattributes.showhelpbutton.value) {
                var _helpbutton;
                //check if the user has already identified a button to use for help
                if (_geezattributes.helpbutton.value)
                    _helpbutton = $("#" + _geezattributes.helpbutton.value);
                //if the user has not specified create one with the default design
                if (!_helpbutton) {
                    _helpbutton = $("<a></a>");
                    _helpbutton.attr("id", "geezhelp_" + (_jg_random++));
                    _helpbutton.css(_buttonstyle);
                    _helpbutton.css({ 'background-image': 'url(../Content/themes/base/images/helpsmall.png)' });
                    _helpbutton.html("&nbsp");
                    _helpbutton.insertAfter($(this));

                    if ($(this).is("textarea"))
                        _helpbutton.css({ 'vertical-align': 'top' });
                }

                _geezattributes.helpbutton.value = _helpbutton.attr("id");
            }

            if (_geezattributes.showtogglebutton.value) {
                var _englishbutton;
                //check if the user has alread identified a button to use for toggling to english typing mode
                if (_geezattributes.englishbutton.value)
                    _englishbutton = $("#" + _geezattributes.englishbutton.value);
                //english button
                if (!_englishbutton) {
                    _englishbutton = $("<a></a>");
                    _englishbutton.attr("id", "englishtoggle_" + (_jg_random++));
                    _englishbutton.css(_buttonstyle);
                    _englishbutton.css({ 'background-image': 'url(http://jgeez.com/Samples/Images/united_kindom.png)' });
                    _englishbutton.html("&nbsp");
                    _englishbutton.insertAfter($(this));

                    if ($(this).is("textarea"))
                        _englishbutton.css({ 'vertical-align': 'top' });
                }

                var _amharicbutton;
                //check if the user has already identified a button to use for toggling to english typing mode
                if (_geezattributes.geezbutton.value)
                    _amharicbutton = $("#" + _geezattributes.geezbutton.value);
                if (!_amharicbutton) {
                    _amharicbutton = $("<a></a>");
                    _amharicbutton.attr("id", "geeztoggle_" + (_jg_random++));
                    _amharicbutton.css(_buttonstyle);
                    _amharicbutton.css({ 'background-image': 'url(http://jgeez.com/Samples/Images/ethiopia_flag.png)' });
                    _amharicbutton.html("&nbsp");
                    _amharicbutton.insertAfter($(this));

                    if ($(this).is("textarea"))
                        _amharicbutton.css({ 'vertical-align': 'top' });
                }

                //update the toggle button ids
                _geezattributes.englishbutton.value = _englishbutton.attr("id");
                _geezattributes.geezbutton.value = _amharicbutton.attr("id");
            }

            $(this).jGeez({
                'englishbutton': _geezattributes.englishbutton.value,
                'geezbutton': _geezattributes.geezbutton.value,
                'showtogglebutton': _geezattributes.showtogglebutton.value,
                'helpbutton': _geezattributes.helpbutton.value,
                'showhelpbutton': _geezattributes.showhelpbutton.value,
                'toggleshortcut': _geezattributes.toggleshortcut.value
            });

        });
    }
});