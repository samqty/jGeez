$(document).ready(function () {
    
});

test("by default jgeez library is enabled", function () {
    $("#txtbox").trigger(jQuery.Event('keypress', { which: "h".charCodeAt(0) }));
    equal($("#txtbox").val(), "ሀ", "jgeez is enabled");
});
