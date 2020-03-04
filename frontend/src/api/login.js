async function login(data) {
    let res = await fetch('/login', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    
    res = await res.json()

    return res;
}

export default login;