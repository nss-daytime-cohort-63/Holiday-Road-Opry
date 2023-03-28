import { getEateries } from "./EateryDataAccess.js"


export const eateriesDropDown =() => {
    const eateries=getEateries()

    let html= ''

    html += '<select id ="eatery">'
    html += '<option value="0"> Select an eatery</option>'

    for (const eatery of eateries) {
        html +=
        `<option value ="${eatery.id}">${eatery.businessName}</option>`
            }

            html += "</select>"
            return html

}