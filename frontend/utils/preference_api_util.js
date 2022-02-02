
export const postPreferences = preferences => (
    $.ajax({
        url: `/api/preferences`,
        method: 'POST',
        data: {preferences}
    })
)

export const fetchPreferences = preferenceId => (
    $.ajax({
        url: `/api/preferences/${preferenceId}`,
        method: 'GET',
    })
)

export const fetchAllPreferences = () => (
    $.ajax({
        url: `/api/preferences`,
        method: 'GET',
    })
)


