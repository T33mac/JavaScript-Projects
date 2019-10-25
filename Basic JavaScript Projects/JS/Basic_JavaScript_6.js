function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}


function Voting_Age() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age >= 18) ? "You are old enough":"You are not old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote."
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "white and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}


function Yellow(Orange) {
    this.Yellow_Orange = Orange;
}
var Red = new Yellow("red")
function whitE() {
    document.getElementById("New_and_This").innerHTML = Red.Yellow_Orange
}



function Outfit(Pants, Shirt, Shoes) {
    this.Outfit_Pants = Pants;
    this.Outfit_Shirt = Shirt;
    this.Outfit_Shoes = Shoes;
}
var Milo = new Outfit("Khaki", "grey hooded", "trail running");
var Billy = new Outfit("denim", "red t-", "black nike");
var Nancy = new outfit("stretchy black", "purple longsleeve", "grey vans");
function wearThis() {
    document.getElementById("Neww").innerHTML =
     "The suspect is wearing " + Milo.Outfit_Pants + " pants and a " 
     + Milo.Outfit_Shirt + " shirt. Suspect was seen running off in " 
     + Milo.Outfit_Shoes + " shoes";
}

function muliply_Function() {
    document.getElementById("Nested_Function").innerHTML = Times();
    function Times() {
        var Starting_point = 7;
        function Times_Itself() {Starting_point *= Starting_point;}
        Times_Itself();
        return Starting_point;
    }
}