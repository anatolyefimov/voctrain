async function login(data) {
    let res = await fetch('/login', {
        method: 'POST',
        credentials: 'same-origin',
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

export default login;