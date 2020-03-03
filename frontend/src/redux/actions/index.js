export const FETCH_USER_DATA = 'FETCH_USER_DATA'

export const fetchUserData = (updatedState) => ({
    type: FETCH_USER_DATA,
    data: updatedState
})