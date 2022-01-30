export const fetchRescues = () => (
    $.ajax({
        url: `/api/rescueorgs`,
        method: 'GET'
    })
)

export const fetchRescue = rescueId => (
    $.ajax({
        url: `/api/rescueorgs/${rescueId}`,
        method: 'GET'
    })
)