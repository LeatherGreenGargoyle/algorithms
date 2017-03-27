/*=====================================Reverse digits of an integer.=========================================*/
// Example1: x = 123, return 321
// Example2: x = -123, return -321
var reverse = function(x) {
    if (x === 0) return 0
    
    let curr = ''
    
    if (x < 0) {
        curr += '-'
        x *= -1
    }
    
    let recurse = (num) => {
        if (num < 10) {
            curr += num.toString()
        } else {
            let digit = num % 10
            curr += digit.toString()
            let shortenedNum = Math.floor(num/10)
            recurse(shortenedNum)
        }
    }
    
    recurse(x)
    
    return parseInt(curr, 10)
};
/*==============================================================================*/