import { HolidayRoad } from "./HolidayRoad.js"
import { fetchAttractions } from "./attractions/AttractionDataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchAttractions()
    .then(
        ()=> {
    mainContainer.innerHTML = HolidayRoad()
         } )
}

render()