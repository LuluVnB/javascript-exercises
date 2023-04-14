const reverseString = function(string) {
    let result = "";
    if(string.length == 0) return null;
    for(let i = 0; i < string.length; i++){
        
        
        let resultString = string;
        let lastLetter = resultString.slice(-1);
        resultString = resultString.slice(0, -1);
        result += lastLetter;
        // return string.split("").reverse().join("");
`       `



    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
