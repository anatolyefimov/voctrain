async function getUserData() {
    let res = await fetch('/is_logged_in', {
        method: 'GET',
        credentials: 'same-origin'
    })

    res = await res.json()
    return res
}

export default getUserData;