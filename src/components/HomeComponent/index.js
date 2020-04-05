import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

const HomeComponent = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api')
            .then((response) => response.json())
            .then(data => { setCategories(Object.keys(data)) })
    }, []);

    return (
        <div className="flexContainer menuItems">
            {
                categories.map((category) => {
                    return (<NavLink className="menu" to={'/' + category} key={category} activeStyle={{
                        fontWeight: "bold",
                        textDecoration: "underline"
                    }}>{category}</NavLink>)
                })
            }
        </div>
    );
}

export default HomeComponent;
