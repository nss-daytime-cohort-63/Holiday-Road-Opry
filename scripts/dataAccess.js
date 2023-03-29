const mainContainer = document.querySelector("#container");

const applicationState = {
}

export const itinerary = {}

const API = "http://localhost:8088"

export const fetchItinerary = () => {
    return fetch(`${API}/itineraries`)
        .then(res => res.json())
        .then((data) => {
            applicationState.itineraries = data
        })
}

export const getItineraries = () => {
    return applicationState.itineraries.map(itinerary => ({...itinerary}))
}

export const setPark = (input) => {
    itinerary.parkName = input
    console.log(itinerary)
}

export const setAttraction = (input) => {
    itinerary.attractionName = input
}

export const setEatery = (input) => {
    itinerary.eateryName = input
}

export const sendItinerary = (itinerary) => {
    return fetch(`${API}/itineraries`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(itinerary)
    })
        .then(res => res.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}