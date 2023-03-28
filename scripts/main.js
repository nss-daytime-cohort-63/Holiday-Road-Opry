import { HolidayRoad } from "./HolidayRoad.js"
import { fetchAttractions } from "./attractions/AttractionDataAccess.js"
import { fetchEateries } from "./eateries/EateryDataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchAttractions()
    .then(()=>fetchEateries())
    .then(
        ()=> {
    mainContainer.innerHTML = HolidayRoad()
         } )
}

render()