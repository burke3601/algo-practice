function amendTheSentence(s) {
    let parts = s.split(/(?=[A-Z])/);
    return parts.map( (e) => { return e.toLowerCase(); } ).join(" ");
}

console.log(amendTheSentence("Hello There"))
console.log(amendTheSentence("Hello There XXXXXxXXXxXXXxXXX"))



let array = [1,2,3]

const map1 = array.map(x => x*2);

console.log(map1)