import { getParks } from "./ParkDataAccess.js";


export const parkDropDown =() => {
    const parks = getParks()

    let html= ''

    html += '<select id ="park" class="dropdowns">'
    html += '<option value="0"> Select a Park</option>'

    for (const park of parks) {
        html +=
        `<option value ="${park.parkCode}" name="${park.fullName}">${park.fullName}</option>`
            }

            html += "</select>"
            return html

}


export const selectedNP =(selected)=>{
const parks = getParks()

let html="<p>"
 const parkSelected = parks.find(park => park.parkCode === selected)
 const physicalPark = parkSelected.addresses.find(addresses => addresses.type === "Physical")
 html+= `Come visit ${parkSelected.fullName} in ${physicalPark.city}, ${physicalPark.stateCode}</p>`
 html+= `<p> ${parkSelected.description}</p>`
    
     //html += `<p>${parkSelected.addresses[0].city}, ${parkSelected.addresses[0].stateCode}</p>`
    
    
    
    html+="</p>"  
 return html

}

export const parkPreview = (selected) => {
    const parks = getParks()
    const foundPark = parks.find(park => park.parkCode === selected)
    let html=`<h2 class="foundPark">${foundPark.fullName}</h2>`
    return html
}


document.addEventListener("change", selectedPark =>{
    if(selectedPark.target.id.startsWith("park")){
        let parkselected = selectedPark.target.value
        const parkdetail = document.querySelector("#park-detail")
        const renderPreviewHTML = document.querySelector("#previewPark")

        parkdetail.innerHTML = selectedNP(parkselected)
        renderPreviewHTML.innerHTML = parkPreview(parkselected)
    }
})