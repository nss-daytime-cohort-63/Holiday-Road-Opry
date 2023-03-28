const eateryState ={

}

const API ="http://holidayroad.nss.team/eateries"

export const fetchEateries =() =>{
    return fetch(`${API}`)
    .then(response => response.json())
    .then(
        (eatery)=>{
            eateryState.eateries =eatery
        }
    )
}

export const getEateries =() =>{
    return eateryState.eateries.map(eatery=>({...eatery}))
}