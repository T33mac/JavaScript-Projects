function get_Date() {
    if (new Date().getDay() == 5) {
            document.getElementById("Wake_Up").innerHTML = "Have a great weekend!!";
    }
}

function If_It() {
    x = 15
    y = 25
    if ((x + y) > 30) {
        document.getElementById("Say_True").innerHTML = "Pretty much True!!";
    } 
}

function sample_Function() {
    Eyes = document.getElementById("Eyes").value;
    if (Eyes >= 1) {
        Drive = "You can drive!";
    }
    else {
        Drive = "Sorry, nice try!";
    }
    document.getElementById("Are_You_Seeing?").innerHTML = Drive;
}

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is the evening time."
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

