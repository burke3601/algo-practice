function containsDuplicates(a) {
    let o = []
    for(let e of a) if(!o.includes(e)) o.push(e)
    return o.length != a.length
}

console.log(containsDuplicates('abcdefghijjk'))
console.log(containsDuplicates('this is a test'))
console.log(containsDuplicates('no dupes'))
