async function updateWordLists(data) {
    let res = await fetch('/update_word_lists', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    
    res = await res.json()

    return res;
}

export default updateWordLists;