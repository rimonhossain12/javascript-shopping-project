// function for calcuated

// recive input value and calculated price

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
    // assingn the value of totalPrice;
    priceInput.innerText = productNumber * price;

}



document.getElementById('case-plus').addEventListener('click', function () {
    getInputValue('case', true, 59)
})

document.getElementById('case-minus').addEventListener('click', function () {
    getInputValue('case', false, 59);
})