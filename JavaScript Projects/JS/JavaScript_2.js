function validateForm() {
    var x = document.forms["fform"]["fname"]["email"];
    if (x == "") {
        alert("First Name and email must be filled out");
        return false;
    }
}