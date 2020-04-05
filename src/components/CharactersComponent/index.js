import React, {useState, useEffect} from 'react'
import fetchCharacters from './../../api/characters';
import './style.css';
import { Helmet } from 'react-helmet'

const TITLE = 'Characters - Ricky and Monty'

const HomeComponent = () => {

    const [characters, setCharacters] = useState([]);

    const textAlignCenterStyle = {
        textAlign: 'center',
        marginBottom: 4,
        fontSize: 14
    }

    const style = {
        maxWidth : 1024,
        margin : '0 auto',
        padding : 8
    }

    useEffect(() => {
        fetchCharacters('https://rickandmortyapi.com/api/character/').then(data => { setCharacters(data['results']) })
    }, []);

    return (
        <div className="flexContainer" style={style}>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            {
                characters.map((character) => {
                    return (<div className="character-item" key={character.id}>
                        <img src={character.image} alt=""/>
                        <p style={textAlignCenterStyle} className="character-detail"><strong>Name:</strong> {character.name}</p>
                        <p style={textAlignCenterStyle} className="character-detail"><strong>Status:</strong> {character.status}</p>
                        <p style={textAlignCenterStyle} className="character-detail"><strong>Species:</strong> {character.species}</p>
                        <p style={textAlignCenterStyle} className="character-detail"><strong>Gender:</strong> {character.gender}</p>
                    </div>)
                })
            }
        </div>
    );
}

export default HomeComponent;
