const maze = function(array, row=0, col=0) {
    if ( array[row][col+1] === ' ') {
        return 'R' + maze(array, row, col+1)
    } else if ( array[row][col+1] === 'e' ) {
        return 'R'
    }

    if ( array[row+1][col] === ' ' ) {
        return 'D' + maze(array, row+1, col)
    } else if ( array[row+1][col] === 'e' ) {
        return 'D'
    }

    if ( array[row][col-1] === ' ') {
        return 'L' + maze(array, row, col-1)
    } else if (array[row][col-1] === 'e') {
        return 'L'
    }
}