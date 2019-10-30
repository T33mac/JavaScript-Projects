//--2*2*2*2*2.....--:
function Call_Loop() {
    var y = "";
    var z = 2;
    var x = 1;
    
    while (x <= 512) {
        y += " ==> ==> " +(x * z);
        x = (x * 2);
    }
    document.getElementById("loop").innerHTML = y;
}

//--string length--:
function Str_Length() {
    var str = "How many characters do I take up?";
    var n = str.length;
    document.getElementById("chee").innerHTML = n;
}

//---For Loop--:

var Instruments = ["Piano", "Drums", "Cowbell", "Spoons", "Washboard", "Oboe"];
var Content = "";
var Y = 0;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//-----Array Function---:

function array_Function() {
    var Bell = [];
    Bell[0] = "Liberty";
    Bell[1] = "lunch";
    Bell[2] = "cow";
    Bell[3] = "dinner";
    Bell[4] = "church";
    document.getElementById("Array").innerHTML = "I run for the " + Bell[3] + " bell, but not"
    + " for the " + Bell[2] + " bell."
}

//--Constant Function---:

function constant_function()  {
    const w = "There are";
    var x = 14;
    y = 1;
    x = (y + x);
    document.getElementById("Constant").innerHTML = w + " eggs in my refrigerator." + x + " and counting.";
}

//--Let Function------:

function let_Function() {
    var x = 15;
    var y = 12;
    document.getElementById("letIt").innerHTML = x + 2; 
    {
        let x = (y);
        document.getElementById("beA").innerHTML = x; 
    }   
    document.getElementById("Thing").innerHTML = x;
}

//---Return Statement---:

function re_Turn() {
    var x = my_Turn(4, 22);
    function my_Turn(a, b) {
        return b - a;
    }
    document.getElementById("skrib").innerHTML = x;
}

//---"let" object---:

function my_Object() {
    let camera = {
        make: "Olympus ",
        model: "E-PL2 ",
        type: "interchangable lens ",
        color: "black ",
        sensor_size: "micro 4/3 ",
        resolution: "16 megapixel ",
        description: function() {
            return "I take an " + this.make + this.model + "camera on vacations. "
            + "It is an " + this.type + " model with a " + this.sensor_size + "sensor.";
         }
    };
    document.getElementById("Camera_Object").innerHTML = camera.description();
}

//--Break Statement---:

function break_Statement() {
    var x = 4;
    var y = 0;
    var t = "";
    for (y >= 0; y < x; y++){
        if(y == 4) {
            break;
        }
        t += y + "<br>";
    }
    document.getElementById("break").innerHTML = t;
}

//--Continue Statement---:

function continue_Function() {
    var x = 6;
    var y = 0;
    var t = "";
    for (y >= 0; y < x; y++){
        if(y == 4) {
            continue;
        }
        t += y + "----";
    }
    document.getElementById("cont1").innerHTML = t;
}