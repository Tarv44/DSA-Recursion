const stringSplit = function(str) {
    if (!str.includes('/')) {
        return [str]
    }

    const sepIdx = str.indexOf('/')
    const section = str.slice(0, sepIdx)
    return [section].concat(stringSplit(str.slice(sepIdx+1)))
}