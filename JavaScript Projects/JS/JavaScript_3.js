//--Data attribute---:

function displayType(car) {
    var carType = car.getAttribute("data-car-type");
    alert(carType + " is a " + car.innerHTML + " automobile model.")
}