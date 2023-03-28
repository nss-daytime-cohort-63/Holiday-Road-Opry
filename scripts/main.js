import { HolidayRoad } from "./HolidayRoad.js"
import { fetchAttractions } from "./attractions/AttractionDataAccess.js"
import { fetchParks } from "./parks/ParkDataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchAttractions()
    .then(()=>fetchParks())
    .then(
        ()=> {
    mainContainer.innerHTML = HolidayRoad()
         } )
}

render()
//fetchParks()