
const baseURL = "https://developer.nps.gov/api/v1/"

export const fetchParks = () => {
    return fetch(`${baseURL}/parks/?api_key=`)
}