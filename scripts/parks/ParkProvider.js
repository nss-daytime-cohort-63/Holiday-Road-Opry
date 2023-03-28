import { getParks } from "./ParkDataAccess.js";


export const parkDropDown =() => {
    const parks = getParks()

    let html= ''

    html += '<select id ="park">'
    html += '<option value="0"> Select a Park</option>'

    for (const park of parks) {
        html +=
        `<option value ="${park.id}">${park.fullName}</option>`
            }

            html += "</select>"
            return html

}