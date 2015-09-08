$(document).ready(function () {
    
});

test("jGeez feature is enabled by (jgeez-enabled) attribute", function () {
    $("#txtbox-enabled").trigger(jQuery.Event('keypress', { which: "h".charCodeAt(0) }));
    equal($("#txtbox-enabled").val(), "ሀ", "jgeez is enabled");
});

test("jGeez feature is disabled by (jgeez-disabled) attribute", function () {
    $("#txtbox-disabled").trigger(jQuery.Event('keypress', { which: "h".charCodeAt(0) }));
    notEqual($("#txtbox-disabled").val(), "ሀ", "jgeez is disabled");
});
