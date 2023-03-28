
const attractionState={

}

const API ="http://holidayroad.nss.team/bizarreries"

export const fetchAttractions = () => {
    return fetch(`${API}`)
    .then(response => response.json())
    .then(
        (attraction)=> {
            attractionState.attractions=attraction
        }

    )
}

export const getAttractions = () => {
    return attractionState.attractions.map(attraction=>({...attraction}))
}