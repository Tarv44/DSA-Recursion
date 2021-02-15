const bigMaze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', ' ', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function allMazePaths (array) {
    const results = []
    function traverse(maze, r = 0, c = 0, rte='Path to the exit: ') {
        if ( r >= 0 && r <= array.length - 1 && c >= 0 && c <= array[0].length - 1) {
            if (maze[r][c] === 'e') { results.push(rte) }
            if (maze[r][c] === ' ') {
                maze[r][c] = '*'
                traverse(maze, r, c+1, rte + 'R')
                traverse(maze, r, c-1, rte + 'L')
                traverse(maze, r+1, c, rte + 'D')
                traverse(maze, r-1, c, rte + 'U')
            }
        }
    }
    traverse(array)
    return results
}