async function logout() {
    return await fetch('/logout', {
        method: 'GET',
        credentials: 'same-origin'
    })
}

export default logout