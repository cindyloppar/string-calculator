
function addIntStringMethod(str) {

    var sum = 0;
    var replacedCharacters = str.replace(/\n/g, ",");
    var splittedString = replacedCharacters.split(",")

    for (var i = 0; i < splittedString.length; i++) {

        if (str === '') {
            return 0;
        }
        else if (/,\n/g.test(str) === true) {
            return new Error(`we cant have two separators next to each other!`);
        }
        else if (/\/\//g.test(str) === true) {
            return delimiters(str, splittedString);
        }
        else if (splittedString[i] < 0) {
            var message = `Negative numbers are not allowed: ${splittedString.filter((element) => element < 0)}`
            return new Error(message);
        }
        sum += Number(splittedString[i])

    }
    return sum;
}

function delimiters(str, splittedString) {
    var delimiter = splittedString[0][2];
    return splittedString[1].split(delimiter).reduce((a, b) => Number(a) + Number(b));
}

console.log(addIntStringMethod(''));
console.log(addIntStringMethod('1,2'));
console.log(addIntStringMethod('785,9087,5653'));
console.log(addIntStringMethod('1\n2,3'));
console.log(addIntStringMethod('1,\n'));
console.log(addIntStringMethod('//;\n1;2'));
console.log(addIntStringMethod('-9,-0'));