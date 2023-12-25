const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    const resultContainer = document.createElement('h4');
    if(height < 0 || height === '' || isNaN(height)) {
        resultContainer.appendChild(document.createTextNode(`Please enter the valid vlaue of the height in cm`));
    }
    else if(weight < 0 || weight === '' || isNaN(weight)) {
        resultContainer.appendChild(document.createTextNode(`Please enter the valid vlaue of the weight in cm`));
    }
    else {
        let bmiValue = (weight / ((height * height) / 1000)).toFixed(2);
        let value;
        if(bmiValue < 18.6) {
            value = "Under Weight";
        }
        else if(bmiValue <= 29.4) {
            value = "Normal Range";
        }
        else {
            value = "Over Weight"
        }
        resultContainer.appendChild(document.createTextNode(`${value} : ${bmiValue}`));
    }
    result.appendChild(resultContainer);
    form.reset();
})