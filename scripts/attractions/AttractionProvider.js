import { getAttractions } from "./AttractionDataAccess.js";

export const attractionDropDown =() => {
    const attractions=getAttractions()

    let html= ''

    html += '<select id ="attraction">'
    html += '<option value="0"> Select an attraction</option>'

    for (const attraction of attractions) {
        html +=
        `<option value ="${attraction.id}">${attraction.name}</option>`
            }

            html += "</select>"
            return html

}