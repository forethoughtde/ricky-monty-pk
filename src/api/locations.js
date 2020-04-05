const fetchLocations = ()=>{
    const LOCATION_URL = 'https://rickandmortyapi.com/api/location'
    return fetch(LOCATION_URL, {cache: "force-cache"}).then((response)=>response.json())
};

export default fetchLocations;
