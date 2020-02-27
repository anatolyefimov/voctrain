async function getUserData() {
    let res = await fetch('/get_user_data', {
        method: 'GET',
        credentials: 'same-origin'
    })

    res = await res.json()
    return res
}

export default getUserData;