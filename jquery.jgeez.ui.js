//root level attribute definition
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
            //reset the geez attributes for each input
            _geezattributes = jGeezAttributes();

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