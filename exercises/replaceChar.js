function replaceChar(inputStr, replaceThis, withThis){
    var retval = [];

    for (var i = 0; i < inputStr.length; i++){
        if (inputStr[i] === replaceThis) {
            retval.push(withThis);

        } else {
            retval.push(inputStr[i]);
        }
    }
    return retval.join('');
}

console.log(replaceChar('william silly fellow', 'l', '$'));