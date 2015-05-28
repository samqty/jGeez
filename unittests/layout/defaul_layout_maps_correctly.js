//create an isolated box
//var box = $("<iframe><html><head></head></html></iframe>");
box = $("html");

//$("body").append(box);

//add reference to jgeez
////var libraryreference = $("<javascript src='../jquery.jgeez.js'>");
box.find("head").append('<script type="text/javascript" src="../jquery-1.8.2.min.js"></script>');
////box.find("head").append('<script type="text/javascript" src="../qunit.js"></script>');
box.find("head").append('<script type="text/javascript" src="../jquery.jgeez.js"></script>');
//box.find("head").append('<script type="text/javascript" src="../jquery.jgeez.ui.js"></script>');

//box.append("<body></body>");

//create the geez button
var testcontainer = $("<div></div>");
box.find("body").append(testcontainer);
var geezinput = $("<input type='text'/>");
testcontainer.append(geezinput);

//apply jgeez
//box.load(function () {
//    geezinput.jGeez();
//});

$(document).ready(function () {
    geezinput.jGeez();
});

//check if the library is creating the write layout
//test("can map ሀ ", function () {
//    var h_geezinput = $("<input type='text'/>");
//    testcontainer.append(h_geezinput);
//    h_geezinput.jGeez();

//    h_geezinput.trigger(jQuery.Event('keypress', { which: "h".charCodeAt(0)}));
//    equal(h_geezinput.val(), "ሀ", "h is not correctly mapped");
//});



test('can map ሀ to h', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "h".charCodeAt(0) }));
    equal(_geezinput.val(), "ሀ", "ሀ is not correctly mapped");
});

test('can map ሁ to h + u', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "h".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ሁ", "ሁ is not correctly mapped");
});

test('can map ሂ to h + i', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "h".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ሂ", "ሂ is not correctly mapped");
});

test('can map ሃ to h + a', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "h".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ሃ", "ሃ is not correctly mapped");
});

test('can map ሄ to h + y', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "h".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ሄ", "ሄ is not correctly mapped");
});

test('can map ህ to h + e', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "h".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "ህ", "ህ is not correctly mapped");
});

test('can map ሆ to h + o', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "h".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ሆ", "ሆ is not correctly mapped");
});

test('can map ለ to l', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "l".charCodeAt(0) }));
    equal(_geezinput.val(), "ለ", "ለ is not correctly mapped");
});

test('can map ሉ to l + u', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "l".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ሉ", "ሉ is not correctly mapped");
});

test('can map ሊ to l + i', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "l".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ሊ", "ሊ is not correctly mapped");
});

test('can map ላ to l + a', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "l".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ላ", "ላ is not correctly mapped");
});

test('can map ሌ to l + y', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "l".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ሌ", "ሌ is not correctly mapped");
});

test('can map ል to l + e', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "l".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "ል", "ል is not correctly mapped");
});

test('can map ሎ to l + o', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "l".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ሎ", "ሎ is not correctly mapped");
});

test('can map ሐ to h + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "H".charCodeAt(0), shiftKey: true }));
    equal(_geezinput.val(), "ሐ", "ሐ is not correctly mapped");
});

test('can map ሑ to h + u + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "H".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ሑ", "ሑ is not correctly mapped");
});

test('can map ሒ to h + i + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "H".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ሒ", "ሒ is not correctly mapped");
});

test('can map ሓ to h + a + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "H".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ሓ", "ሓ is not correctly mapped");
});

test('can map ሔ to h + y + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "H".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ሔ", "ሔ is not correctly mapped");
});

test('can map ሕ to h + e + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "H".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "ሕ", "ሕ is not correctly mapped");
});

test('can map ሖ to h + o + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "H".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ሖ", "ሖ is not correctly mapped");
});

test('can map መ to m', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "m".charCodeAt(0) }));
    equal(_geezinput.val(), "መ", "መ is not correctly mapped");
});

test('can map ሙ to m + u', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "m".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ሙ", "ሙ is not correctly mapped");
});

test('can map ሚ to m + i', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "m".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ሚ", "ሚ is not correctly mapped");
});

test('can map ማ to m + a', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "m".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ማ", "ማ is not correctly mapped");
});

test('can map ሜ to m + y', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "m".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ሜ", "ሜ is not correctly mapped");
});

test('can map ም to m + e', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "m".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "ም", "ም is not correctly mapped");
});

test('can map ሞ to m + o', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "m".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ሞ", "ሞ is not correctly mapped");
});

test('can map ሠ to s + Shift + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "s".charCodeAt(0), shiftKey: true }));
    equal(_geezinput.val(), "ሠ", "ሠ is not correctly mapped");
});

test('can map ሡ to s + u + Shift + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "s".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ሡ", "ሡ is not correctly mapped");
});

test('can map ሢ to s + i + Shift + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "s".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ሢ", "ሢ is not correctly mapped");
});

test('can map ሣ to s + a + Shift + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "s".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ሣ", "ሣ is not correctly mapped");
});

test('can map ሤ to s + y + Shift + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "s".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ሤ", "ሤ is not correctly mapped");
});

test('can map ሥ to s + e + Shift + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "s".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "ሥ", "ሥ is not correctly mapped");
});

test('can map ሦ to s + o + Shift + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "s".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ሦ", "ሦ is not correctly mapped");
});

test('can map ረ to r', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "r".charCodeAt(0) }));
    equal(_geezinput.val(), "ረ", "ረ is not correctly mapped");
});

test('can map ሩ to r + u', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "r".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ሩ", "ሩ is not correctly mapped");
});

test('can map ሪ to r + i', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "r".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ሪ", "ሪ is not correctly mapped");
});

test('can map ራ to r + a', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "r".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ራ", "ራ is not correctly mapped");
});

test('can map ሬ to r + y', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "r".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ሬ", "ሬ is not correctly mapped");
});

test('can map ር to r + e', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "r".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "ር", "ር is not correctly mapped");
});

test('can map ሮ to r + o', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "r".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ሮ", "ሮ is not correctly mapped");
});

test('can map ሰ to s', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "s".charCodeAt(0) }));
    equal(_geezinput.val(), "ሰ", "ሰ is not correctly mapped");
});

test('can map ሱ to s + u', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "s".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ሱ", "ሱ is not correctly mapped");
});

test('can map ሲ to s + i', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "s".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ሲ", "ሲ is not correctly mapped");
});

test('can map ሳ to s + a', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "s".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ሳ", "ሳ is not correctly mapped");
});

test('can map ሴ to s + y', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "s".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ሴ", "ሴ is not correctly mapped");
});

test('can map ስ to s + e', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "s".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "ስ", "ስ is not correctly mapped");
});

test('can map ሶ to s + o', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "s".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ሶ", "ሶ is not correctly mapped");
});

test('can map ሸ to s + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "S".charCodeAt(0), shiftKey: true }));
    equal(_geezinput.val(), "ሸ", "ሸ is not correctly mapped");
});

test('can map ሹ to s + u + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "S".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ሹ", "ሹ is not correctly mapped");
});

test('can map ሺ to s + i + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "S".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ሺ", "ሺ is not correctly mapped");
});

test('can map ሻ to s + a + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "S".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ሻ", "ሻ is not correctly mapped");
});

test('can map ሼ to s + y + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "S".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ሼ", "ሼ is not correctly mapped");
});

test('can map ሽ to s + e + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "S".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "ሽ", "ሽ is not correctly mapped");
});

test('can map ሾ to s + o + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "S".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ሾ", "ሾ is not correctly mapped");
});

test('can map ቀ to q', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "q".charCodeAt(0) }));
    equal(_geezinput.val(), "ቀ", "ቀ is not correctly mapped");
});

test('can map ቁ to q + u', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "q".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ቁ", "ቁ is not correctly mapped");
});

test('can map ቂ to q + i', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "q".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ቂ", "ቂ is not correctly mapped");
});

test('can map ቃ to q + a', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "q".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ቃ", "ቃ is not correctly mapped");
});

test('can map ቄ to q + y', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "q".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ቄ", "ቄ is not correctly mapped");
});

test('can map ቅ to q + e', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "q".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "ቅ", "ቅ is not correctly mapped");
});

test('can map ቆ to q + o', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "q".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ቆ", "ቆ is not correctly mapped");
});

test('can map ቊ to q + shift ', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "Q".charCodeAt(0), shiftKey: true }));
    equal(_geezinput.val(), "ቊ", "ቊ is not correctly mapped");
});

test('can map ቋ to q  + u + shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "Q".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ቋ", "ቋ is not correctly mapped");
});

test('can map ቌ to q  + i + shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "Q".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ቌ", "ቌ is not correctly mapped");
});

test('can map ቍ to q  + a + shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "Q".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ቍ", "ቍ is not correctly mapped");
});

test('can map ቎ to q  + y + shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "Q".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "቎", "቎ is not correctly mapped");
});

test('can map ቏ to q  + e + shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "Q".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "቏", "቏ is not correctly mapped");
});

test('can map ቐ to q  + o + shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "Q".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ቐ", "ቐ is not correctly mapped");
});

test('can map በ to b', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "b".charCodeAt(0) }));
    equal(_geezinput.val(), "በ", "በ is not correctly mapped");
});

test('can map ቡ to b + u', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "b".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ቡ", "ቡ is not correctly mapped");
});

test('can map ቢ to b + i', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "b".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ቢ", "ቢ is not correctly mapped");
});

test('can map ባ to b + a', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "b".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ባ", "ባ is not correctly mapped");
});

test('can map ቤ to b + y', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "b".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ቤ", "ቤ is not correctly mapped");
});

test('can map ብ to b + e', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "b".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "ብ", "ብ is not correctly mapped");
});

test('can map ቦ to b + o', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "b".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ቦ", "ቦ is not correctly mapped");
});

test('can map ቨ to v', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "v".charCodeAt(0) }));
    equal(_geezinput.val(), "ቨ", "ቨ is not correctly mapped");
});

test('can map ቩ to v + u', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "v".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ቩ", "ቩ is not correctly mapped");
});

test('can map ቪ to v + i', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "v".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ቪ", "ቪ is not correctly mapped");
});

test('can map ቫ to v + a', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "v".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ቫ", "ቫ is not correctly mapped");
});

test('can map ቬ to v + y', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "v".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ቬ", "ቬ is not correctly mapped");
});

test('can map ቭ to v + e', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "v".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "ቭ", "ቭ is not correctly mapped");
});

test('can map ቮ to v + o', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "v".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ቮ", "ቮ is not correctly mapped");
});

test('can map ተ to t', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "t".charCodeAt(0) }));
    equal(_geezinput.val(), "ተ", "ተ is not correctly mapped");
});

test('can map ቱ to t + u', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "t".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ቱ", "ቱ is not correctly mapped");
});

test('can map ቲ to t + i', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "t".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ቲ", "ቲ is not correctly mapped");
});

test('can map ታ to t + a', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "t".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ታ", "ታ is not correctly mapped");
});

test('can map ቴ to t + y', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "t".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ቴ", "ቴ is not correctly mapped");
});

test('can map ት to t + e', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "t".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "ት", "ት is not correctly mapped");
});

test('can map ቶ to t + o', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "t".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ቶ", "ቶ is not correctly mapped");
});

test('can map ቸ to c', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "c".charCodeAt(0) }));
    equal(_geezinput.val(), "ቸ", "ቸ is not correctly mapped");
});

test('can map ቹ to c + u', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "c".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ቹ", "ቹ is not correctly mapped");
});

test('can map ቺ to c + i', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "c".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ቺ", "ቺ is not correctly mapped");
});

test('can map ቻ to c + a', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "c".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ቻ", "ቻ is not correctly mapped");
});

test('can map ቼ to c + y', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "c".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ቼ", "ቼ is not correctly mapped");
});

test('can map ች to c + e', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "c".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "ች", "ች is not correctly mapped");
});

test('can map ቾ to c + o', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "c".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ቾ", "ቾ is not correctly mapped");
});

test('can map ኀ to h + Shift + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "h".charCodeAt(0), shiftKey: true }));
    equal(_geezinput.val(), "ኀ", "ኀ is not correctly mapped");
});

test('can map ኁ to h + u + Shift + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "h".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ኁ", "ኁ is not correctly mapped");
});

test('can map ኂ to h + i + Shift + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "h".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ኂ", "ኂ is not correctly mapped");
});

test('can map ኃ to h + a + Shift + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "h".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ኃ", "ኃ is not correctly mapped");
});

test('can map ኄ to h + y + Shift + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "h".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ኄ", "ኄ is not correctly mapped");
});

test('can map ኅ to h + e + Shift + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "h".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "ኅ", "ኅ is not correctly mapped");
});

test('can map ኆ to h + o + Shift + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "h".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ኆ", "ኆ is not correctly mapped");
});

test('can map ነ to n', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "n".charCodeAt(0) }));
    equal(_geezinput.val(), "ነ", "ነ is not correctly mapped");
});

test('can map ኑ to n + u', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "n".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ኑ", "ኑ is not correctly mapped");
});

test('can map ኒ to n + i', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "n".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ኒ", "ኒ is not correctly mapped");
});

test('can map ና to n + a', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "n".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ና", "ና is not correctly mapped");
});

test('can map ኔ to n + y', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "n".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ኔ", "ኔ is not correctly mapped");
});

test('can map ን to n + e', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "n".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "ን", "ን is not correctly mapped");
});

test('can map ኖ to n + o', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "n".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ኖ", "ኖ is not correctly mapped");
});

test('can map ኘ to n + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "N".charCodeAt(0), shiftKey: true }));
    equal(_geezinput.val(), "ኘ", "ኘ is not correctly mapped");
});

test('can map ኙ to n + u + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "N".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ኙ", "ኙ is not correctly mapped");
});

test('can map ኚ to n + i + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "N".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ኚ", "ኚ is not correctly mapped");
});

test('can map ኛ to n + a + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "N".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ኛ", "ኛ is not correctly mapped");
});

test('can map ኜ to n + y + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "N".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ኜ", "ኜ is not correctly mapped");
});

test('can map ኝ to n + e + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "N".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "ኝ", "ኝ is not correctly mapped");
});

test('can map ኞ to n + o + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "N".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ኞ", "ኞ is not correctly mapped");
});

test('can map አ to x', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "x".charCodeAt(0) }));
    equal(_geezinput.val(), "አ", "አ is not correctly mapped");
});

test('can map ኡ to x + u', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "x".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ኡ", "ኡ is not correctly mapped");
});

test('can map ኢ to x + i', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "x".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ኢ", "ኢ is not correctly mapped");
});

test('can map ኣ to x + a', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "x".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ኣ", "ኣ is not correctly mapped");
});

test('can map ኤ to x + y', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "x".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ኤ", "ኤ is not correctly mapped");
});

test('can map እ to x + e', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "x".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "እ", "እ is not correctly mapped");
});

test('can map ኦ to x + o', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "x".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ኦ", "ኦ is not correctly mapped");
});

test('can map ከ to k', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "k".charCodeAt(0) }));
    equal(_geezinput.val(), "ከ", "ከ is not correctly mapped");
});

test('can map ኩ to k + u', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "k".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ኩ", "ኩ is not correctly mapped");
});

test('can map ኪ to k + i', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "k".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ኪ", "ኪ is not correctly mapped");
});

test('can map ካ to k + a', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "k".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ካ", "ካ is not correctly mapped");
});

test('can map ኬ to k + y', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "k".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ኬ", "ኬ is not correctly mapped");
});

test('can map ክ to k + e', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "k".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "ክ", "ክ is not correctly mapped");
});

test('can map ኮ to k + o', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "k".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ኮ", "ኮ is not correctly mapped");
});

test('can map ኸ to H + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "H".charCodeAt(0), shiftKey: false }));
    equal(_geezinput.val(), "ኸ", "ኸ is not correctly mapped");
});

test('can map ኹ to H + u + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "H".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ኹ", "ኹ is not correctly mapped");
});

test('can map ኺ to H + i + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "H".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ኺ", "ኺ is not correctly mapped");
});

test('can map ኻ to H + a + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "H".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ኻ", "ኻ is not correctly mapped");
});

test('can map ኼ to H + y + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "H".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ኼ", "ኼ is not correctly mapped");
});

test('can map ኽ to H + e + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "H".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "ኽ", "ኽ is not correctly mapped");
});

test('can map ኾ to H + o + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "H".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ኾ", "ኾ is not correctly mapped");
});

test('can map ወ to w', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "w".charCodeAt(0) }));
    equal(_geezinput.val(), "ወ", "ወ is not correctly mapped");
});

test('can map ዉ to w + u', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "w".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ዉ", "ዉ is not correctly mapped");
});

test('can map ዊ to w + i', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "w".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ዊ", "ዊ is not correctly mapped");
});

test('can map ዋ to w + a', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "w".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ዋ", "ዋ is not correctly mapped");
});

test('can map ዌ to w + y', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "w".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ዌ", "ዌ is not correctly mapped");
});

test('can map ው to w + e', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "w".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "ው", "ው is not correctly mapped");
});

test('can map ዎ to w + o', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "w".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ዎ", "ዎ is not correctly mapped");
});

test('can map አ to x', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "x".charCodeAt(0) }));
    equal(_geezinput.val(), "አ", "አ is not correctly mapped");
});

test('can map ኡ to x + u', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "x".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ኡ", "ኡ is not correctly mapped");
});

test('can map ኢ to x + i', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "x".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ኢ", "ኢ is not correctly mapped");
});

test('can map ኣ to x + a', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "x".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ኣ", "ኣ is not correctly mapped");
});

test('can map ኤ to x + y', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "x".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ኤ", "ኤ is not correctly mapped");
});

test('can map እ to x + e', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "x".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "እ", "እ is not correctly mapped");
});

test('can map ኦ to x + o', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "x".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ኦ", "ኦ is not correctly mapped");
});

test('can map ዘ to z', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "z".charCodeAt(0) }));
    equal(_geezinput.val(), "ዘ", "ዘ is not correctly mapped");
});

test('can map ዙ to z + u', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "z".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ዙ", "ዙ is not correctly mapped");
});

test('can map ዚ to z + i', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "z".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ዚ", "ዚ is not correctly mapped");
});

test('can map ዛ to z + a', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "z".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ዛ", "ዛ is not correctly mapped");
});

test('can map ዜ to z + y', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "z".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ዜ", "ዜ is not correctly mapped");
});

test('can map ዝ to z + e', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "z".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "ዝ", "ዝ is not correctly mapped");
});

test('can map ዞ to z + o', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "z".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ዞ", "ዞ is not correctly mapped");
});

test('can map ዠ to z + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "Z".charCodeAt(0), shiftKey: true }));
    equal(_geezinput.val(), "ዠ", "ዠ is not correctly mapped");
});

test('can map ዡ to z + u + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "Z".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ዡ", "ዡ is not correctly mapped");
});

test('can map ዢ to z + i + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "Z".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ዢ", "ዢ is not correctly mapped");
});

test('can map ዣ to z + a + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "Z".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ዣ", "ዣ is not correctly mapped");
});

test('can map ዤ to z + y + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "Z".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ዤ", "ዤ is not correctly mapped");
});

test('can map ዥ to z + e + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "Z".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "ዥ", "ዥ is not correctly mapped");
});

test('can map ዦ to z + o + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "Z".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ዦ", "ዦ is not correctly mapped");
});

test('can map የ to y + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "Y".charCodeAt(0), shiftKey: true }));
    equal(_geezinput.val(), "የ", "የ is not correctly mapped");
});

test('can map ዩ to y + u + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "Y".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ዩ", "ዩ is not correctly mapped");
});

test('can map ዪ to y + i + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "Y".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ዪ", "ዪ is not correctly mapped");
});

test('can map ያ to y + a + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "Y".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ያ", "ያ is not correctly mapped");
});

test('can map ዬ to y + y + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "Y".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ዬ", "ዬ is not correctly mapped");
});

test('can map ይ to y + e + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "Y".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "ይ", "ይ is not correctly mapped");
});

test('can map ዮ to y + o + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "Y".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ዮ", "ዮ is not correctly mapped");
});

test('can map ደ to d', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "d".charCodeAt(0) }));
    equal(_geezinput.val(), "ደ", "ደ is not correctly mapped");
});

test('can map ዱ to d + u', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "d".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ዱ", "ዱ is not correctly mapped");
});

test('can map ዲ to d + i', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "d".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ዲ", "ዲ is not correctly mapped");
});

test('can map ዳ to d + a', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "d".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ዳ", "ዳ is not correctly mapped");
});

test('can map ዴ to d + y', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "d".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ዴ", "ዴ is not correctly mapped");
});

test('can map ድ to d + e', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "d".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "ድ", "ድ is not correctly mapped");
});

test('can map ዶ to d + o', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "d".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ዶ", "ዶ is not correctly mapped");
});

test('can map ዸ to p + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "P".charCodeAt(0), shiftKey: true }));
    equal(_geezinput.val(), "ዸ", "ዸ is not correctly mapped");
});

test('can map ዹ to p + u + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "P".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ዹ", "ዹ is not correctly mapped");
});

test('can map ዺ to p + i + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "P".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ዺ", "ዺ is not correctly mapped");
});

test('can map ዻ to p + a + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "P".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ዻ", "ዻ is not correctly mapped");
});

test('can map ዼ to p + y + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "P".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ዼ", "ዼ is not correctly mapped");
});

test('can map ዽ to p + e + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "P".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "ዽ", "ዽ is not correctly mapped");
});

test('can map ዾ to p + o + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "P".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ዾ", "ዾ is not correctly mapped");
});

test('can map ጀ to j', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "j".charCodeAt(0) }));
    equal(_geezinput.val(), "ጀ", "ጀ is not correctly mapped");
});

test('can map ጁ to j + u', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "j".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ጁ", "ጁ is not correctly mapped");
});

test('can map ጂ to j + i', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "j".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ጂ", "ጂ is not correctly mapped");
});

test('can map ጃ to j + a', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "j".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ጃ", "ጃ is not correctly mapped");
});

test('can map ጄ to j + y', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "j".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ጄ", "ጄ is not correctly mapped");
});

test('can map ጅ to j + e', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "j".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "ጅ", "ጅ is not correctly mapped");
});

test('can map ጆ to j + o', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "j".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ጆ", "ጆ is not correctly mapped");
});

test('can map ገ to g', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "g".charCodeAt(0) }));
    equal(_geezinput.val(), "ገ", "ገ is not correctly mapped");
});

test('can map ጉ to g + u', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "g".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ጉ", "ጉ is not correctly mapped");
});

test('can map ጊ to g + i', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "g".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ጊ", "ጊ is not correctly mapped");
});

test('can map ጋ to g + a', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "g".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ጋ", "ጋ is not correctly mapped");
});

test('can map ጌ to g + y', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "g".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ጌ", "ጌ is not correctly mapped");
});

test('can map ግ to g + e', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "g".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "ግ", "ግ is not correctly mapped");
});

test('can map ጎ to g + o', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "g".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ጎ", "ጎ is not correctly mapped");
});

test('can map ጠ to t + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "T".charCodeAt(0), shiftKey: true }));
    equal(_geezinput.val(), "ጠ", "ጠ is not correctly mapped");
});

test('can map ጡ to t + u + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "T".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ጡ", "ጡ is not correctly mapped");
});

test('can map ጢ to t + i + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "T".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ጢ", "ጢ is not correctly mapped");
});

test('can map ጣ to t + a + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "T".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ጣ", "ጣ is not correctly mapped");
});

test('can map ጤ to t + y + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "T".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ጤ", "ጤ is not correctly mapped");
});

test('can map ጥ to t + e + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "T".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "ጥ", "ጥ is not correctly mapped");
});

test('can map ጦ to t + o + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "T".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ጦ", "ጦ is not correctly mapped");
});

test('can map ጨ to c + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "C".charCodeAt(0), shiftKey: true }));
    equal(_geezinput.val(), "ጨ", "ጨ is not correctly mapped");
});

test('can map ጩ to c + u + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "C".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ጩ", "ጩ is not correctly mapped");
});

test('can map ጪ to c + i + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "C".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ጪ", "ጪ is not correctly mapped");
});

test('can map ጫ to c + a + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "C".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ጫ", "ጫ is not correctly mapped");
});

test('can map ጬ to c + y + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "C".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ጬ", "ጬ is not correctly mapped");
});

test('can map ጭ to c + e + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "C".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "ጭ", "ጭ is not correctly mapped");
});

test('can map ጮ to c + o + Shift', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "C".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ጮ", "ጮ is not correctly mapped");
});

test('can map ጸ to t + Shift + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "t".charCodeAt(0), shiftKey: true }));
    equal(_geezinput.val(), "ጸ", "ጸ is not correctly mapped");
});

test('can map ጹ to t + u + Shift + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "t".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ጹ", "ጹ is not correctly mapped");
});

test('can map ጺ to t + i + Shift + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "t".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ጺ", "ጺ is not correctly mapped");
});

test('can map ጻ to t + a + Shift + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "t".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ጻ", "ጻ is not correctly mapped");
});

test('can map ጼ to t + y + Shift + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "t".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ጼ", "ጼ is not correctly mapped");
});

test('can map ጽ to t + e + Shift + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "t".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "ጽ", "ጽ is not correctly mapped");
});

test('can map ጾ to t + o + Shift + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "t".charCodeAt(0), shiftKey: true }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ጾ", "ጾ is not correctly mapped");
});

test('can map ፀ to T + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "T".charCodeAt(0),shiftKey:false }));
    equal(_geezinput.val(), "ፀ", "ፀ is not correctly mapped");
});

test('can map ፁ to T + u + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "T".charCodeAt(0), shiftKey: false }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ፁ", "ፁ is not correctly mapped");
});

test('can map ፂ to T + i + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "T".charCodeAt(0), shiftKey: false }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ፂ", "ፂ is not correctly mapped");
});

test('can map ፃ to T + a + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "T".charCodeAt(0), shiftKey: false }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ፃ", "ፃ is not correctly mapped");
});

test('can map ፄ to T + y + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "T".charCodeAt(0), shiftKey: false }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ፄ", "ፄ is not correctly mapped");
});

test('can map ፅ to T + e + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "T".charCodeAt(0), shiftKey: false }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "ፅ", "ፅ is not correctly mapped");
});

test('can map ፆ to T + o + Caps', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "T".charCodeAt(0), shiftKey: false }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ፆ", "ፆ is not correctly mapped");
});

test('can map ፈ to f', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "f".charCodeAt(0) }));
    equal(_geezinput.val(), "ፈ", "ፈ is not correctly mapped");
});

test('can map ፉ to f + u', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "f".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ፉ", "ፉ is not correctly mapped");
});

test('can map ፊ to f + i', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "f".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ፊ", "ፊ is not correctly mapped");
});

test('can map ፋ to f + a', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "f".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ፋ", "ፋ is not correctly mapped");
});

test('can map ፌ to f + y', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "f".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ፌ", "ፌ is not correctly mapped");
});

test('can map ፍ to f + e', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "f".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "ፍ", "ፍ is not correctly mapped");
});

test('can map ፎ to f + o', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "f".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ፎ", "ፎ is not correctly mapped");
});

test('can map ፐ to p', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "p".charCodeAt(0) }));
    equal(_geezinput.val(), "ፐ", "ፐ is not correctly mapped");
});

test('can map ፑ to p + u', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "p".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "u".charCodeAt(0) }));
    equal(_geezinput.val(), "ፑ", "ፑ is not correctly mapped");
});

test('can map ፒ to p + i', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "p".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "i".charCodeAt(0) }));
    equal(_geezinput.val(), "ፒ", "ፒ is not correctly mapped");
});

test('can map ፓ to p + a', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "p".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "a".charCodeAt(0) }));
    equal(_geezinput.val(), "ፓ", "ፓ is not correctly mapped");
});

test('can map ፔ to p + y', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "p".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "y".charCodeAt(0) }));
    equal(_geezinput.val(), "ፔ", "ፔ is not correctly mapped");
});

test('can map ፕ to p + e', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "p".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "e".charCodeAt(0) }));
    equal(_geezinput.val(), "ፕ", "ፕ is not correctly mapped");
});

test('can map ፖ to p + o', function () {
    var _geezinput = $("<input type='text'/>");
    testcontainer.append(_geezinput);
    _geezinput.jGeez();

    _geezinput.trigger(jQuery.Event('keypress', { which: "p".charCodeAt(0) }));
    _geezinput.trigger(jQuery.Event('keypress', { which: "o".charCodeAt(0) }));
    equal(_geezinput.val(), "ፖ", "ፖ is not correctly mapped");
});

//test("sample test", function () { ok(true, "it is working"); });
//testcontainer.remove();
//libraryreference.remove();
