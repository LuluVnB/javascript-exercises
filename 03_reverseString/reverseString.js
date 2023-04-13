const reverseString = function(string) {
    let result = "";
    for(let i = 0; i < string.length; i++){
        if(string.length == 0) return null;
        
        
        let resultString = string;
        let lastLetter = resultString.slice(-1);
        resultString = resultString.slice(0, -1);
        result += lastLetter;




    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
