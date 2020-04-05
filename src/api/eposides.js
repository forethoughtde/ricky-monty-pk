const fetchEposides = ()=>{
    const EPOSIDE_API = 'https://rickandmortyapi.com/api/episode'
    return fetch(EPOSIDE_API, {cache: "force-cache"}).then((response)=>response.json())
};

export default fetchEposides;
