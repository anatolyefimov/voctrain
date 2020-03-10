export function randomIndex(length, exclude = -1, cnt = 1) {
    let used = {}
    let result = []
    for (let i = 0; i < cnt; ++i) {
        let current 
        do {
            current = Math.floor(Math.random() * length)
        } while (used[current] || current === exclude)
        used[current] = true
        result.push(current)
    }

    return result
}

export function randomShuffle(arr) {
    let array = [...arr]
    let current = array.length
  
    while (current--) { 
        let rand = randomIndex(current); 
        [array[rand], array[current]] = [array[current], array[rand]]
    }
  
    return array;
  }