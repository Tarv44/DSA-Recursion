const triNum = function(num) {
    if (num === 1){
        return num
    }
        
    return num + triNum(num - 1)
}