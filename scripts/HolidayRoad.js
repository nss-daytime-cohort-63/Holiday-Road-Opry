import { attractionDropDown } from "./attractions/AttractionProvider.js"
import { parkDropDown } from "./parks/ParkProvider.js"
import { eateriesDropDown } from "./eateries/EateryProvider.js"

export const HolidayRoad = () => {
    return `Holiday World 
    ${attractionDropDown()}
     ${parkDropDown()}
    ${eateriesDropDown()}`
}
