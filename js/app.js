function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        // console.log('pin not 4 digit', pin);
        return getPin();
    }
};

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
};

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
});

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previoustypedNumber = typedNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberField.value = '';
        }
        else if (number === '<') {
            const digits = previoustypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else {
        const newTypedNumber = previoustypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
});

document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typeNumber = typedNumberField.value;

    const pinSuccessMessege = document.getElementById('pin-success');
    const pinFailureMessege = document.getElementById('pin-failure');

    if(typeNumber === currentPin){
        
        pinSuccessMessege.style.display = 'block';
        pinFailureMessege.style.display = 'none';
    }
    else{
        
        pinFailureMessege.style.display = 'block';
        pinSuccessMessege.style.display = 'none';
    }
});