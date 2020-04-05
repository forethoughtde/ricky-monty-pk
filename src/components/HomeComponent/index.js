import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'

const HomeComponent = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api')
            .then((response) => response.json())
            .then(data => { setCategories(Object.keys(data)) })
    });

    return (
        <div className="flexContainer menuItems">
            {
                categories.map((category) => {
                    return (<NavLink to={'/' + category} key={category} activeStyle={{
                        fontWeight: "bold",
                        textDecoration: "underline"
                    }} className="menu">{category}</NavLink>)
                })
            }
        </div>
    );
}

export default HomeComponent;
