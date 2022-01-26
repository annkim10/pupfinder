export const fetchRescues = () => (
    $.ajax({
        url: `/api/rescueorgs`,
        method: 'GET'
    })
)

export const fetchRescue = orgId => (
    $.ajax({
        url: `/api/rescueorgs/${orgId}`,
        method: 'GET'
    })
)