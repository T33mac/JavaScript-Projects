//----Switch Statement--:

function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is the best color ever!";
    var Color_String_1 = " is the color of trees!";
    var Color_String_2 = " is the color of royalty!";
    switch(Colors) {
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String_1;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String_2;
        break;
        case "Orange":
            Color_Output = "Orange" + Color_String;
        break;
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        default:
        Color_Output = "Please enter a color exactly as it is written in the above list.";

    }
    document.getElementById("Output").innerHTML = Color_Output;
}

//--getElementByClassName--:

function Hello_World_Function() {
    var A = document.getElementsByClassName("click");
    A[1].innerHTML = "This text shouldn't have changed.";
}

//--Canvas assignment--:

function canvas_Function() {
    var color = document.getElementById("canvas_test");
    var changeit = color.getContext("2d");
    changeit.fillStyle = "darkblue";
    changeit.fillRect (10, 10, 380, 180);
}

//--Canvas Graphic--:

function canvas_Graphic() {
    var c = document.getElementById("canvas_test");
    var ctx = c.getContext("2d");
    var img = document.getElementById("bikes");
    ctx.drawImage(img,20,20,360,160);
  }

//--Gradient canvas--:

function grad_Canv() {
    var p = document.getElementById("Cgradient");
    var ctx = p.getContext("2d");
    var grd = ctx.createLinearGradient(0,0,470,0);
    grd.addColorStop(0, "darkgreen");
    grd.addColorStop(1, "darkslateblue");
    ctx.fillStyle = grd;
    ctx.fillRect(0,0, 450, 150);
}