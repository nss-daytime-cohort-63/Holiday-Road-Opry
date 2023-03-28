import { HolidayRoad } from "./HolidayRoad.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    mainContainer.innerHTML = HolidayRoad()
}

render()