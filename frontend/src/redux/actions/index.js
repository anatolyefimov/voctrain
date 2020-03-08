export const FETCH_USER_DATA = 'FETCH_USER_DATA'
export const UPDATE_WORD_LISTS = 'UPDATE_WORD_LISTS'

export const fetchUserData = (updatedState) => ({
    type: FETCH_USER_DATA,
    data: updatedState
})

export const updateWordLists = (wordLists) => ({
    type: UPDATE_WORD_LISTS,
    wordLists: wordLists
})