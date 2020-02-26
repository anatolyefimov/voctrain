async function isLoggedIn() {
    let res = await fetch('/is_logged_in', {
        method: 'GET',
        credentials: 'same-origin'
    })

    res = await res.json()

    return {
       isLoggedIn: res.is_logged_in,
       username: res.username
    }

}

export default isLoggedIn;