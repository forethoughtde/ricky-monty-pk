const fetchEposides = (url)=>{
    return fetch(url, {cache: "force-cache"}).then((response)=>response.json())
};

export default fetchEposides;
