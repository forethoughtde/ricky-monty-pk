import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './style.css';

const HomeComponent = () => {

    const [characters, setCharacters] = useState([]);

    const textAlignCenterStyle = {
        textAlign: 'center'
    }

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then((response) => response.json())
            .then(data => { setCharacters(data['results']) })
    });

    return (
        <div className="flexContainer">
            {
                characters.map((character) => {
                    return (<div className="character-item" key={character.id}>
                        <img src={character.image} alt=""/>
                        <p style={textAlignCenterStyle}><strong>Name:</strong> {character.name}</p>
                        <p style={textAlignCenterStyle}><strong>Status:</strong> {character.status}</p>
                        <p style={textAlignCenterStyle}><strong>Species:</strong> {character.species}</p>
                        <p style={textAlignCenterStyle}><strong>Gender:</strong> {character.gender}</p>
                    </div>)
                })
            }
        </div>
    );
}

export default HomeComponent;
