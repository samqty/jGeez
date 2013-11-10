//create an isolated box
var box = $("<iframe><html><head></head></html></iframe>");


//add reference to jgeez
var libraryreference = $("<javascript src='../jquery.jgeez.js'>");
box.find("head").append('<script type="text/javascript" src="../jquery-1.8.2.min.js"></script>');
//box.find("head").append('<script type="text/javascript" src="../qunit.js"></script>');
box.find("head").append('<script type="text/javascript" src="../jquery.jgeez.core.js"></script>');
box.find("head").append('<script type="text/javascript" src="../jquery.jgeez.ui.js"></script>');

box.append("<body></body>");

//create the geez button
var testcontainer = $("<div></div>");
box.find("body").append(testcontainer);
var geezinput = $("<input type='text'/>");
testcontainer.append(geezinput);

//apply jgeez
box.load(function () {
    geezinput.jGeez();
});

//check if the library is creating the write layout
test("can map ሀ ", function () {
    ok(function () {
        geezinput.keyPress("h");
        return geezinput.val() == "ሀ";
    }, "english button is not there");
});
testcontainer.remove();
libraryreference.remove();