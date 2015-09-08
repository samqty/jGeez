$(document).ready(function () {
    $("#txtboxenabled").jGeez();
});

test("jGeez feature is turned off by script level setting (jgeez-mode)", function () {
    $("#txtbox").trigger(jQuery.Event('keypress', { which: "h".charCodeAt(0) }));
    notEqual($("#txtbox").val(), "ሀ", "jgeez is not enabled");
});

test("Text box can be individually turned on to accept geez text", function () {
    $("#txtboxenabled").trigger(jQuery.Event('keypress', { which: "h".charCodeAt(0) }));
    equal($("#txtboxenabled").val(), "ሀ", "jgeez is enabled");
});
