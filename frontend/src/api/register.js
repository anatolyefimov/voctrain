async function register(data) {
    let res = await fetch('/register', {
        method: 'POST',
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

export default register;