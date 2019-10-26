// concat():
function Lala() {
    var _1 = "12 \+ ";
    var _2 = "fourteen ";
    var _3 = "the same as ";
    var _4 = "5 \+ 21 ";
    var Factoid = _1.concat(_2, _3, _3, _4);
    document.getElementById("Connect").innerHTML = Factoid;
}

// slice() & toUpperCase():
function Slice_It() {
    var Sentence = "Polly wolly doodle all day"
    var Dood = Sentence.slice(12, 18);
    var Wuzz = Sentence.slice(23, 26);
    document.getElementById("Slice").innerHTML = "Don't " + Dood.toUpperCase() + " during the " + Wuzz + "!";
}

// search() & toUpperCase():
function Upper_Search() {
    var dnn = "I do not know where it is.";
    var s = dnn.search("it")
    document.getElementById("Where").innerHTML = s + " digits in.";
    document.getElementById("Where_Is").innerHTML = dnn.toUpperCase();
}

// toString() number method:

function To_String() {
    x = (50 * 11);
    document.getElementById("Stringy").innerHTML = x.toString();
    document.getElementById("Re_It").innerHTML = "Really, it's not a number. " + x.toString() + " is now string data.";
}

// toPrecision() number method

function Precise() {
    x = (90 / 88);
    document.getElementById("short").innerHTML = x.toPrecision(5);
}

// valueOf() method

function Primitive_Value() {
    var Paintings = ["Oil", "Watercolor"];
    document.getElementById("Paint").innerHTML = Paintings.valueOf();
}

// toFixed() number method:

function To_Fixed() {
    var x = (100 / 99)
    document.getElementById("Smalls").innerHTML = x.toFixed(5);  
}