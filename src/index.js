let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let dozens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let dozens2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable (number) {
    let result = 0;
    let lengthNumber = String(number).length;

    if (lengthNumber === 1) {
        result = units[number];
    }

    else if (lengthNumber === 2) {
        result = calcDozens(number);
    }

    else if (lengthNumber === 3) {
        result = calcHundreds(number);
    }
    return result;
}

function calcDozens(number) {
    let result = 0;
    let dozensNumber = Math.floor(number / 10);
    let unitsNumber = number % 10;
    if (dozensNumber === 1) {
        result = dozens[unitsNumber];
    }
    else if (unitsNumber === 0) {
        result = dozens2[dozensNumber - 2];
    }
    else {
        result = dozens2[dozensNumber - 2] + ' ' + units[unitsNumber];
    }
    return result;
}

function calcHundreds(number) {
    let result = 0;
    let hundredsNumber = Math.floor(number / 100);
    let dozensNumber = Math.floor((number % 100) / 10);
    let unitsNumber = (number % 100) % 10;
    if (dozensNumber === 0 && unitsNumber === 0) {
        result = units[hundredsNumber] + ' hundred';
    }
    else if (dozensNumber === 0) {
        result = units[hundredsNumber] + ' hundred ' + units[unitsNumber];
    }
    else {
        result = units[hundredsNumber] + ' hundred ' + calcDozens(Math.floor(number % 100));
    }
    return result;
}