function capitalize(myString){
    var valueOfFirstChar = myString.charCodeAt(0);
    console.log(`Value of first character ${valueOfFirstChar}`)

    var upperCaseLetter = String.fromCharCode(valueOfFirstChar - 32);
    console.log(`Uppercase first character ${upperCaseLetter}`);

    var restOfString = myString.slice(1);
    console.log(`Rest of string: ${restOfString}`);

    var finalResult = upperCaseLetter + restOfString;
    console.log(`rest of string: ${finalResult}`)

    console.log(finalResult)
}

capitalize('goldfish')

function titleCase(inputStr){
    var tokens = inputStr.split(' ');
    console.log(`Word tokens: ${tokens}`);

    var upperCaseTokens = tokens.map(word => capitalize(word));
    console.log("UpperCase1 word tokens:", upperCaseTokens);

    var finalResult = upperCaseTokens.join(' ');
    console.log('Final Result:', finalResult);

    return finalResult
}

console.log(titleCase('one two three four five'))