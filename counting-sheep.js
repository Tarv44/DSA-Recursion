const countSheep = function(num) {
    if (num === 0) {
        return 'All sheep jumped over the fence'
    }

    return `${num}: Another sheep jumps over the fence. ` + countSheep(num - 1)
}