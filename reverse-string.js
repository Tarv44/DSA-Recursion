const reverseString = function(string) {
    if (string.length === 1) {
        return string
    }

    return string.slice(-1) + reverseString(string.slice(0,-1)) 
}