export const postMeet = meet => {
    return $.ajax({
        url: `/api/users/${meet.userId}/meets`,
        method: 'POST',
        data: {meet}
    })
}

export const fetchMeets = userId => {
    return $.ajax({
        url: `/api/users/${userId}/meets`,
        method: 'GET'
    })
}

export const deleteMeet = (userId, meetId) => {
    return $.ajax({
        url: `/api/users/${userId}/meets/${meetId}`,
        method: 'DELETE'
    })
}