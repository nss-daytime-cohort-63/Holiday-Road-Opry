import {access} from'../Settings.js'
const baseURL = "https://developer.nps.gov/api/v1/"
const nps = access.npsKey

const parks ={
    
}

export const fetchParks = () => {
    return fetch(`${baseURL}/parks/?api_key=${nps}`)
    .then(response =>response.json())
    .then()
}