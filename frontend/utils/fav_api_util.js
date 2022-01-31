export const postFavorite = favorite => {
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

export const fetchFavorites = userId => (
    $.ajax({
        url: `/api/users/${userId}/favorites`,
        method: 'GET'
    })
)