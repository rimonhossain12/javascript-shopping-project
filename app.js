// function for calcuated

// recive input value and calculated price

function getInputValue(product, isTrue) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);


    if (isTrue) {
        productInput.value = productNumber + 1;
    } else if (productNumber > 0) {
        productInput.value = productNumber - 1;
    }

}



document.getElementById('case-plus').addEventListener('click', function () {
    getInputValue('case', true)
})

document.getElementById('case-minus').addEventListener('click', function () {
    getInputValue('case', false);
})