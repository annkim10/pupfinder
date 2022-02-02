export const fetchPups = () => (
    $.ajax({
        url: `/api/pups`,
        method: 'GET'
    })
)

export const fetchPup = pupId => (
    $.ajax({
        url: `/api/pups/${pupId}`,
        method: 'GET'
    })
)

export const filterPup = filter => (
    $.ajax({
        url: `/api/pups/filter`,
        method: 'GET',
        data: { filter }
    })
)