import { attractionDropDown } from "./attractions/AttractionProvider.js"
import { eateriesDropDown } from "./eateries/EateryProvider.js"

export const HolidayRoad = () => {
    return `Holiday World 
    ${attractionDropDown()}
    ${eateriesDropDown()}`
}

