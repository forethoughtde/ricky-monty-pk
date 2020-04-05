const fetchLocations = (url)=>{
    return fetch(url, {cache: "force-cache"}).then((response)=>response.json())
};

export default fetchLocations;
