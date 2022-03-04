const button = document.querySelector('#button');
const decimalInput = document.querySelector('#decimal');


function validateNumber(number) {
    const binaryChain = number.split('')
    const binary = ['0', '1']
    
    for (let i = 0; i < binaryChain.length; i++) {
        let element = binary.includes(binaryChain[i]);
        if (element) {
            continue
        } else {
            return false
        }
    }
    return true
}

function getDecimalNumber(number) {
    // console.log(number);
    if (validateNumber(number)) {
        const binaryChain = number.split('').reverse()
        const decimalChain = []
        binaryChain.forEach((e, index) => {
            const result = e * 2 ** index
            decimalChain.push(result)
        })
        const decimalNumber = decimalChain.reverse().reduce((a, b) => a + b) // * total
        return decimalNumber
    } else {
        alert(`[ERROR]: ${number} is not a binary number`);
    }
}


button.addEventListener('click', function (e) {
    e.preventDefault();
    const binaryInput = document.querySelector('#binary').value;
    const result = getDecimalNumber(binaryInput);

    if (result) {
        decimalInput.value = result
    } else {
        alert('Error. This is not a binary number')
    }
});
