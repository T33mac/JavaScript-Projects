function makeItWork() {
    var str = "Big things, Big things!";
    var result = str.fontsize(22);
    document.getElementById("bigtime").innerHTML = result;
}

function addIt() {
    var sentence = "It's time...";
    sentence += " for a nap.";
    document.getElementById("Concatenate").innerHTML = sentence;
}