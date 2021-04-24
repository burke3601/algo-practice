function titleCase(inputStr){
    var tokens = inputStr.split(' ');
    console.log(`Word tokens: ${tokens}`);

    var upperCaseTokens = tokens.map(word => upperCaseFirst(word));
    console.log("UpperCase1 word tokens:", upperCaseTokens);
}

titleCase('one two three four five')