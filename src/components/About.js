import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

function About(){
    return(
        <div id='despre_noi'>
        <div className='about'>
            <Container>
                <Row>
                    <Col lg={6} md={4} sm={6}>
                        <h1>Despre noi</h1>
                        <br />
                        <p>Dă viață casei tale cu mobilierul nostru modern și inovator. Folosim cele mai recente tehnologii și materiale de calitate pentru a crea piese unice și practice. Fie că dorești un stil minimalist sau unul mai eclectic, suntem aici pentru a te ajuta să găsești mobila perfectă pentru tine.</p>
                        <br />
                        <p>La noi, clientul este mereu pe primul loc! Ne mandrim cu serviciile noastre excelente de consultanta si proiectare a mobilierului, astfel incat sa putem crea mobila perfecta pentru gusturile si nevoile tale. </p>
                    </Col>
                    <Col lg={6} md={4} sm={6}>
                        <img src="images/imagine11.jpg" className='image1' />
                    </Col>
                </Row>
            </Container>
        </div>
        </div>
    )
}

export default About;