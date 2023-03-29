import { HolidayRoad } from "./HolidayRoad.js"
import { fetchAttractions } from "./attractions/AttractionDataAccess.js"
import { fetchParks } from "./parks/ParkDataAccess.js"
import { fetchEateries } from "./eateries/EateryDataAccess.js"
import { fetchItinerary } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render();
    }
)

const render = () => {
    fetchAttractions()
    .then(()=>fetchParks())
    .then(()=>fetchEateries())
    .then(()=>fetchItinerary())
    .then(
        ()=> {
    mainContainer.innerHTML = HolidayRoad()
         } )
}

render()
//fetchParks()