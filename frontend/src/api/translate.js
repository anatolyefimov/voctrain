async function translate(text) {
    let res = await fetch('/translate', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text})
    })

    
    res = await res.json()

    return res;
}

export default translate;