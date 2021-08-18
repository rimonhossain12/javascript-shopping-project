// function for calcuated

// recive input value and calculated back pad price

function getInputValue(product, isTrue, price) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    const priceInput = document.getElementById('case-total');
    const priceTotal = parseInt(priceInput.innerText);
    if (isTrue) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }

    // assingn the value of productInput
    productInput.value = productNumber;

    //update case total

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;


}

// handle phone price

document.getElementById('phone-plus').addEventListener('click', function () {
    getInputValue('phone', true, 1219);
    // const phoneInput = document.getElementById('phone-number');
    // const phoneNumber = parseInt(phoneInput.value);
    // console.log(phoneNumber);
    // // update phone number in display;
    // phoneInput.value = phoneNumber + 1;
});


document.getElementById('phone-minus').addEventListener('click', function () {
    getInputValue('phone', false, 1219);
});


// handle phone phone back pad
document.getElementById('case-plus').addEventListener('click', function () {
    getInputValue('case', true, 59)
})

document.getElementById('case-minus').addEventListener('click', function () {
    getInputValue('case', false, 59);
})

