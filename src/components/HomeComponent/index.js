import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import './style.css'

const RICKY_MONTY_API = 'https://rickandmortyapi.com/api'

const activeNavLink = {
    fontWeight : "bold",
    textDecoration : "underline"
};

const HomeComponent = ()=>{

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch(RICKY_MONTY_API)
            .then((response)=>response.json())
            .then(data=>{
                setCategories(Object.keys(data))
            })
    }, []);

    return (
        <div className="flexContainer menuItems">
            {
                categories.map((category)=>{
                    return (<NavLink className="menu"
                                     to={'/' + category}
                                     key={category}
                                     activeStyle={activeNavLink}>{category}</NavLink>)
                })
            }
        </div>
    );
}

export default HomeComponent;
