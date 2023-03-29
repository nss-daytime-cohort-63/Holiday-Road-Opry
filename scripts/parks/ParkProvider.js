import { getParks } from "./ParkDataAccess.js";


export const parkDropDown =() => {
    const parks = getParks()

    let html= ''

    html += '<select id ="park">'
    html += '<option value="0"> Select a Park</option>'

    for (const park of parks) {
        html +=
        `<option value ="${park.parkCode}">${park.fullName}</option>`
            }

            html += "</select>"
            return html

}


export const selectedPark =(selected)=>{
const parks = getParks()

let html=""
 const parkSelected = parks.data.find(e => element === selected)
 html+= `${parkselected.description}`   
 return html
}

document.addEventListener("change", selectedPark =()=>{
    if(selectedPark.target.id.startsWith("park")){
        const parkselected = selectedPark.target.value
        const parkdetail = document.querySelector("#park-detail")


        parkdetail.innerHTML = selectedPark(parkselected)
    }
})