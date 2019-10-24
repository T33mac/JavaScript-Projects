function minus() {
    var subtracted = 100 - 12;
    document.getElementById("math").innerHTML = "100 - 12 = " + subtracted;
}

function multiply() {
    var product = 12 * 12;
    document.getElementById("math_1").innerHTML ="twelve times twelve = " + product
}

function divide() {
    var product = 88 / 11;
    document.getElementById("math_2").innerHTML ="88 / eleven equals: " + product
}

function getting_mathy() {
    var product = ((120 + 12) - (18 + 14)) / 5;
    document.getElementById("math_3").innerHTML ="((120 + 12) - (18 + 14)) / 5 = " + product
}

function mod_op() {
    var left_over = 38 % 6;
    document.getElementById("math_4").innerHTML ="38 divided by 6 leaves " + left_over + " left over"
}

function neg_op() {
    var x = 14
    document.getElementById("math_5").innerHTML = -x;
}

function up_1_op() {
    var x = 2.44;
    x++;
    document.getElementById("math_6").innerHTML = x;
}

function down_1_op() {
    var x = 2.44;
    x--;
    document.getElementById("math_7").innerHTML = x;
}
function random() {
document.getElementById("demo").innerHTML = Math.floor(Math.random() * 500);
}

function power() {
    x = 7;
    x++
    document.getElementById("math_8").innerHTML = Math.pow(x,3);
}