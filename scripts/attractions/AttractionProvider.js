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
const mainContainer = document.querySelector("#container")

export const selectedAttraction =(selected) =>{
const attractions = getAttractions()
let html ='<p>'

const foundAttraction = attractions.find(attraction=> attraction.id === parseInt(selected))   
    html += `Come visit ${foundAttraction.name} in ${foundAttraction.city}, ${foundAttraction.state}</p>
      <p>${foundAttraction.description}</p> `
     if(foundAttraction.ameneties.souvenirs ===true ){
 html += '<p> Souvenirs:&#10003</p>'
     }
     else{
        html += '<p> Souvenirs:</p>'
     }
     if(foundAttraction.ameneties.restrooms ===true ){
        html += '<p> Restrooms:&#10003'
            }
            else{
               html += '<p> Restrooms:'
            }
          html+=  `</p>`
    return html
}

export const attractionPreview = (selected) => {
    const attractions = getAttractions()
    const foundAttraction = attractions.find(attraction=> attraction.id === parseInt(selected)) 
    let html=`<h2 class="foundAttraction">${foundAttraction.name}</h2>`
    return html
}

mainContainer.addEventListener("change",
changeEvent =>{
    if(changeEvent.target.id === 'attraction'){
        const selectedAt = changeEvent.target.value
        const renderHTML = document.querySelector("#attraction-detail")
        const renderPreviewHTML=document.querySelector("#previewAttraction")
        renderHTML.innerHTML = selectedAttraction(selectedAt)
        renderPreviewHTML.innerHTML=attractionPreview(selectedAt)

    }
}
)
