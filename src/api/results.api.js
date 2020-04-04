const BASE_URL = 'https://kerala-university-api.herokuapp.com'

const fetchResults = async () => {
    const data = await (await fetch(`${BASE_URL}/results`)).json()
    return data
}

const fetchNotifications = async () => {
    const data = await (await fetch(`${BASE_URL}/notifications`)).json()
    return data
}

export {
    fetchResults,
    fetchNotifications
}