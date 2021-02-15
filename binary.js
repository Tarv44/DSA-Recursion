function binary(int, result = '') {
    if (int === 1) {
        return Number(1 + result)
    } 
    return binary(Math.floor(int/2), int%2 + result)
}