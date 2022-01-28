export const postMeet = meet => {
    return $.ajax({
        url: `/api/users/${meet.userId}/meets`,
        method: 'POST',
        data: {meet}
    })
}

