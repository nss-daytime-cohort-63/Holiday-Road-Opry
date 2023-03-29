import { getItineraries, setPark, setAttraction, setEatery, sendItinerary, itinerary } from "./dataAccess.js";

export const savedItineraries = () => {
    const Itineraries = getItineraries()
    let html = ''
    Itineraries.map(itinerary => {
        html += `<div class="single-itinerary">
            <p>${itinerary.parkName}</p>
            <p>${itinerary.attractionName}</p>
            <p>${itinerary.eateryName}</p>
        </div>
        `

    }).join("")

    return html
}


document.addEventListener("click", e => {
    if (e.target.id.startsWith("itinerary-button")) {
        const savedContainer = document.querySelector(".saved-itineraries")
        const previewPark = document.querySelector("#previewPark")
        const previewAttraction = document.querySelector("#previewAttraction")
        const previewEateries = document.querySelector("#previewEatery")


        //savedContainer.innerHTML = savedItineraries()

        if (previewPark.innerText.length !== 0 && previewAttraction.innerText.length !== 0 && previewEateries.innerText.length !== 0) {
            setPark(previewPark.innerText)
            setAttraction(previewAttraction.innerText)
            setEatery(previewEateries.innerText)
            //previewPark.innerHTML = '';
            //previewAttraction.innerHTML = '';
            //previewEateries.innerHTML = '';
            sendItinerary(itinerary)
        } else {
            window.alert("Please select your park, attraction and eatery!")
        }

        

    }
})
