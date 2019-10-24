document.write(typeof "gjgjj");

function seeIf() {
    document.getElementById("test").innerHTML = "chair"/12
}

function maybe_num() {
    document.getElementById("test_2").innerHTML = isNaN("fourteen")
}
function neg_Inf() {
document.getElementById("test_3").innerHTML = document.write(-4E350)
}

function Infin() {
    document.getElementById("test_4").innerHTML = document.write(4E350)
    }

function Boole() {
    x = 12;
    y = 13;
    y--;
    document.getElementById("test_5").innerHTML = (x > y)
}

function Boole_2() {
    x = 12;
    y = 13;
    y--;
    document.getElementById("test_6").innerHTML = (x == y)
}

console.log("11" + 4)
console.log(10 < 9)
console.log("ten" + 4)

function Dbl_Eql() {
    x = 12;
    y = 13;
    document.getElementById("test_false").innerHTML = (x == y)
}

function Dbl_Eql_2() {
    x = 14;
    y = 13;
    y++;
    document.getElementById("test_true").innerHTML = (x == y)
}

function Trpl_Eql() {
    x = 15;
    y = "wall"
    document.getElementById("test_false_2").innerHTML = (x === y)
}

function Trpl_Eql_2() {
    x = 15;
    y = (10 + 5);
    document.getElementById("test_true_2").innerHTML = (x === y)
}

function log_op() {
    document.getElementById("not").innerHTML = !(2 <= 5);
}

function log_op_2() {
    document.getElementById("logic_2").innerHTML = (2 < 5 && 6 > 3);
}