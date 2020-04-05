const fetchCharacters = ()=>{
    const CHARACTER_API = 'https://rickandmortyapi.com/api/character/'
    return fetch(CHARACTER_API, {cache: "force-cache"}).then((response)=>response.json())
};

export default fetchCharacters;
