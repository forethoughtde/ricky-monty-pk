import React, {useEffect, useState} from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Helmet } from 'react-helmet'

const TITLE = 'Locations - Ricky and Monty'

const LocationsComponent = ()=>{
    const [locations, setLocations] = useState([]);

    const stylePadding = {
        padding : 8
    }

    const textAlignCenterStyle = {
        textAlign : 'center'
    }

    const styleMarginBottom = {
        width : '100%'
    }

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/location/')
            .then((response)=>response.json())
            .then(data=>{
                setLocations(data['results'])
            })
    }, []);

    return (
        <div style={stylePadding}>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <h1>List of Locations</h1>
            <div className="flexContainer">
                <Accordion defaultActiveKey="0">
                    {
                        locations.map((location, i)=>{
                            return (
                                <Card style={styleMarginBottom} key={location.id}>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey={location.id}>
                                            {location.name}
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={location.id}>
                                        <Card.Body>
                                            <p><strong>Type:</strong> {location.type}</p>
                                            <p><strong>Dimension:</strong> {location.dimension}</p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            )
                        })
                    }
                </Accordion>
            </div>
        </div>
    );
}

export default LocationsComponent;
