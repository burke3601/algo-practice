// KUniqueCharacters(str) take the str parameter being passed and find the longest substring that contains k unique characters, where k will be the first character from the string. The substring will start from the second position in the string because the first character will be the integer k. For example: if str is "2aabbacbaa" there are several substrings that all contain 2 unique characters, namely: ["aabba", "ac", "cb", "ba"], but your program should return "aabba" because it is the longest substring. If there are multiple longest substrings, then return the first substring encountered with the longest length. k will range from 1 to 6.


let str = '3aabacbebebe'
// Output: cbebebe

//need to pop

function KUniqueCharacters(str) { 

    //console.log(str.split("").shift())

    let k = str.split("").shift()

    console.log(k);
    console.log(str)
    console.log(str.length)


      // code goes here 
      const count = new Map()
      let max = 0
      
      let i = 0
      let j = 0
    
      while (j < s.length) {
        const charJ  = s[j]
        
        if (count.has(charJ)) {
          count.set(charJ, count.get(charJ) + 1)
        } else {
          if (count.size === k) {
            // need to remove chars from left
            while (count.size > k - 1) {
              const charI = s[i]
              const countI = count.get(charI)
              if (countI === 1) {
                count.delete(charI)
              } else {
                count.set(charI, countI - 1)
              }
              
              i += 1
            }
          }
          
          // safely add it to hashmap
          count.set(charJ, 1)
        }
        
        max = Math.max(max, j - i + 1)
        j += 1
      }
      
      return max
    
    }

console.log(KUniqueCharacters(str))