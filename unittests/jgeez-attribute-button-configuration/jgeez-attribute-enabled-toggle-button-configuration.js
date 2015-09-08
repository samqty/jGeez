$(document).ready(function () {
    
});

test("three buttons are added after jgeez plugin is applied to an input box", function () {
    equal($("#txtbox").nextAll("a[id^=geeztoggle]").length, 1, "geez toggle button is not added");
    equal($("#txtbox").nextAll("a[id^=englishtoggle]").length, 1, "english toggle button is not added");
    equal($("#txtbox").nextAll("a[id^=geezhelp]").length, 1, "help button is not added");

    ok($("#txtbox").nextAll("a[id^=geeztoggle]").css('display')=='none', "geez mode is enabled by default");
    ok($("#txtbox").nextAll("a[id^=englishtoggle]").css('display')!='none', "english toggle is visible by default");
    ok($("#txtbox").nextAll("a[id^=geezhelp]").css('display')!='none', "help button is visible by default");
});
