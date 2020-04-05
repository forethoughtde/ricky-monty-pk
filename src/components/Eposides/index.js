import React, {useState, useEffect} from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const EposidesComponent = ()=>{

    const [eposides, setEposides] = useState([]);

    const stylePadding = {
        padding : 8
    }

    const textAlignCenterStyle = {
        textAlign : 'center'
    }

    const styleMarginBottom = {
        width: '100%'
    }

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/episode/')
            .then((response)=>response.json())
            .then(data=>{
                setEposides(data['results'])
            })
    }, []);

    return (
        <div style={stylePadding}>
            <h1>List of Eposides</h1>
            <div className="flexContainer">
                <Accordion defaultActiveKey="0">
                    {
                        eposides.map((eposide, i)=>{
                            return (
                                <Card style={styleMarginBottom} key={eposide.id}>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey={eposide.id}>
                                            {eposide.episode}
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={eposide.id}>
                                        <Card.Body>
                                            <p><strong>Title:</strong> {eposide.name}</p>
                                            <p><strong>Air Date:</strong> {eposide.air_date}</p>
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

export default EposidesComponent;
