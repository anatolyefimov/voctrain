async function getUserData() {
    let res = await fetch('/get_user_data', {
        method: 'GET',
        credentials: 'same-origin'
    })

    const status = res.status;
    
    res = await res.json()
    res.status = status;

    if (res.status === 401) {
        return {
            isLoggedIn: false,
            data: {
                username: ''
            }
        } 
    } 
    return {
        isLoggedIn: true,
        data: {
            username: res.username
        }
        
    }

}

export default getUserData;