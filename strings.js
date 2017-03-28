/* ========================== License Key Formatting ================================================================*/
// Now you are given a string S, which represents a software license key which we would like to format. 
// The string S is composed of alphanumerical characters and dashes. The dashes split the alphanumerical 
// characters within the string into groups. (i.e. if there are M dashes, the string is split into M+1 groups). 
// The dashes in the given string are possibly misplaced.

// We want each group of characters to be of length K (except for possibly the first group, which could be shorter, 
// but still must contain at least one character). To satisfy this requirement, we will reinsert dashes. Additionally, 
// all the lower case letters in the string must be converted to upper case.

var licenseKeyFormatting = function(S, K) {
    let charCt = 0,
        result = ''
    
    for (let i = S.length - 1; i >= 0; i--) {
        let currChar = S[i]
        if (currChar === '-') {
            continue;
        } else if (isNaN(currChar)) {
            result = currChar.toUpperCase() + result
            charCt++
        } else {
            result = currChar + result
            charCt++
        }
        
        if (charCt === K && i !== 0) {
            result = '-' + result
            charCt = 0
        }
    }
    
    if (result[0] === '-') {
        result = result.slice(1)
    }
    
    return result
};
/* =========================================================================================================*/