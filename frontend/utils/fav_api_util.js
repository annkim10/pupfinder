export const postFavorite = favorite => {
    debugger
    return $.ajax({
        url: `/api/favorites`,
        method: 'POST',
        data: {favorite}
    }) 
}
    

export const deleteFavorite = favoriteId => (
    $.ajax({
        url: `/api/favorites/${favoriteId}`,
        method: 'DELETE'
    })
)