import { attractionDropDown } from "./attractions/AttractionProvider.js"
import { parkDropDown } from "./parks/ParkProvider.js"

export const HolidayRoad = () => {
    return `Holiday World 
    ${attractionDropDown()}
     ${parkDropDown()}`
}

