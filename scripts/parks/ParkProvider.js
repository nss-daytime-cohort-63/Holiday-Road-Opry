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


export const selectedNP =(selected)=>{
const parks = getParks()

let html=""
 const parkSelected = parks.find(park => park.parkCode === selected)
 html+= `${parkSelected.description}`   
 return html
}

document.addEventListener("change", selectedPark =>{
    if(selectedPark.target.id.startsWith("park")){
        let parkselected = selectedPark.target.value
        const parkdetail = document.querySelector("#park-detail")


        parkdetail.innerHTML = selectedNP(parkselected)
    }
})