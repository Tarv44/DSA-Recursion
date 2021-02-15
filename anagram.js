function anagram(str) {
    const result = []
    function traverse(str, perm='') {
        const seen = new Set()
        if (!str) { result.push(perm) }
        for (let i = 0; i < str.length; i++) {
            if (!seen.has(str[i])){
                seen.add(str[i])
                traverse(str.slice(0,i) + str.slice(i+1) , perm + str[i])
            }
        }
    }
    traverse(str)

    return result
}