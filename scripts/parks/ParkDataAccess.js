import Settings from'../Settings.js'
const baseURL = "https://developer.nps.gov/api/v1/"
const nps = Settings.npsKey

const parkState ={
    
}

export const fetchParks = () => {
    return fetch(`${baseURL}parks?api_key=${nps}&limit=500`)
    .then(response =>response.json())
    .then((park)=> {
        parkState.parks=park
    })
}

export const getParks =()=>{
    return parkState.parks.data.map(park =>({...park}))
}