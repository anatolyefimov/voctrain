async function updateWordLists(data) {
    let res = await fetch('/update_word_lists', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    const status = res.status;
    
    res = await res.json()
    res.status = status;

    return res;
}

export default updateWordLists;