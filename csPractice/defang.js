var defangIPaddr = function(address) {
    let defang = ""

    for(char of address){
        if(char==="."){
            defang += "[.]"
        } else{
            defang += char;
        }
    }
    return defang;
};


defangIPaddr("1.1.1.1")
defangIPaddr("255.100.50.0")