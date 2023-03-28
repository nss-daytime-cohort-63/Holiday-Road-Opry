import { HolidayRoad } from "./HolidayRoad.js"
import { fetchParks } from "./parks/ParkDataAccess.js"
const mainContainer = document.querySelector("#container")

const render = () => {
    mainContainer.innerHTML = HolidayRoad()
}

render()
fetchParks()