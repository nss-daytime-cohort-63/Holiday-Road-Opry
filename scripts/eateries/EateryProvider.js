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

const mainContainer = document.querySelector("#container")

export const selectedEatery =(selected) =>{
const eateries = getEateries()
let html ='<p>'

const foundEatery = eateries.find(eatery=> eatery.id === parseInt(selected))   
    html +=  `Come visit ${foundEatery.businessName} in ${foundEatery.city}, ${foundEatery.state}</p>
      <p>${foundEatery.description}</p> `
     if(foundEatery.ameneties.wheelchairAccessible ===true ){
 html += '<p> Wheelchair Accessible:&#10003</p>'
     }
     else{
        html += '<p> Wheelchair Accessible:</p>'
     }
     if(foundEatery.ameneties.restrooms ===true ){
        html += '<p> Restrooms:&#10003'
            }
            else{
               html += '<p> Restrooms:'
            }
          html+=  `</p>`
    return html
}

const eateryPreview = (selected) => {
    const eateries = getEateries()
    let html = ``
    
    const foundEatery = eateries.find(eatery=> eatery.id === parseInt(selected))   
    html += `<h2 class="foundEatery">${foundEatery.businessName}</h2>`
    return html
}

mainContainer.addEventListener("change",
changeEvent =>{
    if(changeEvent.target.id === 'eatery'){
        const selectedEat = changeEvent.target.value
        const renderHTML = document.querySelector("#eateries-detail")
        const renderPreviewHTML = document.querySelector("#previewEatery")
        renderHTML.innerHTML = selectedEatery(selectedEat)
        renderPreviewHTML.innerHTML = eateryPreview(selectedEat)
    }
}
)
