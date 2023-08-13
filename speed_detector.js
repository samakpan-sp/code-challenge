//Add eventListener to the button
document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculateButton');
    calculateButton.addEventListener('click', calculateDemeritPoints);
});

//Calculates speed values
function calculateDemeritPoints() {
    const carSpeedInput = document.getElementById('carSpeed');
    const resultOutput = document.getElementById('result');

    const carSpeed = parseFloat(carSpeedInput.value);
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (carSpeed <= speedLimit) {
        resultOutput.textContent = "Ok";
        return;
    }
    //Evaluates users speeds 
    const demeritPoints = Math.floor((carSpeed - speedLimit) / kmPerPoint);

    if (demeritPoints > 12) {
        resultOutput.textContent = "License suspended";
    } else {
        resultOutput.textContent = `Points: ${demeritPoints}`;
    }
}
