/// <reference path="../qunit.js" />
/// <reference path="../jquery-1.8.2.min.js" />

//add reference to jgeez
var libraryreference = $("<javascript src='../jquery.jgeez.js'>");
$("head").append(libraryreference);

//create the geez button
var testcontainer = $("<div></div>");
$("body").append(testcontainer);
var geezinput = $("<input type='text' jgeez-showtogglebutton='true'>");
testcontainer.append(geezinput);

//apply jgeez
geezinput.jGeez({'showtogglebutton':true});

//check if the toggle button is added
test("english toggle button is there", function () {
    ok(testcontainer.find("[id^='english_toggle']").length == 1, "english button is not there");
});

test("geez toggle button is there", function () {
    ok(testcontainer.find("[id^='geez_toggle']").length == 1, "geez button is not there");
});


testcontainer.remove();
libraryreference.remove();