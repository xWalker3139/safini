import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../App.css';

function Banner(){
    const myStyle = {
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(images/imagine12.jpg)",
    }
    return (
        <div id='acasa'>
        <div className='banner' style={myStyle}>
            <Container>
                <h1 className='header1'>Safini</h1>
                <p className='param1'>Transforma-ti casa intr-un camin cu adevarat confortabil si elegant cu mobila noastra</p>
                <p className='param1'>de calitate superioara!</p>
                <Row>
                    <Col lg={4} md={4} sm={6}>
                        <Card id="card1">
                            <Card.Title className='card-title'>Creeaza-ti caminul perfect cu mobila noastra de calitate!</Card.Title>
                            <br/>
                            <Card.Subtitle className='card-subtitle'>Descopera colectia noastra de piese de mobilier elegante, practice si durabile, perfecte pentru a da un plus de stil si functionalitate oricarei incaperi din casa ta.</Card.Subtitle>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                        <Card id="card1">
                            <Card.Title className='card-title'>Mobila noastra - calitate si confort pentru casa ta!</Card.Title>
                            <br/>
                            <Card.Subtitle className='card-subtitle'>La noi, mobila nu este doar un produs, ci o arta! Fiecare piesa de mobilier este creata cu atentie la detalii si cu pasiune pentru designul si functionalitatea ei.</Card.Subtitle>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                        <Card id="card1">
                            <Card.Title className='card-title'>Mobila noastra - aduce stilul si functionalitatea acasa ta!</Card.Title>
                            <br/>
                            <Card.Subtitle className='card-subtitle'>Vrei sa ai parte de un spatiu cu adevarat unic si personalizat? La noi, iti oferim posibilitatea de a-ti personaliza mobila cu alegerea de culori, materiale si dimensiuni. </Card.Subtitle>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
        </div>
    )
}

export default Banner;