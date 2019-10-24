function my_Dictionary() {
    var Instrument = {
        Type: "Piano",
        Brand: "yamaha",
        Configuration: "Upright",
        Model: "U-1",
        Color: "Black",
        Condition: "New",
    }
    delete Instrument.Color
    document.getElementById("Dictionary").innerHTML = Instrument.Color
}