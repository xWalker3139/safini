import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

function Footer(){
    return(
        <div className='footer'>
            <Container>
                <Row>
                    <Col lg={4} md={4} sm={6}>
                        <p className='param4'>Despre noi</p>
                        <br />
                        <p>Creează un spațiu funcțional și frumos cu mobilierul nostru personalizat. Oferim o gamă largă de opțiuni de personalizare, de la dimensiuni și finisaje până la accesorii și materiale. Indiferent de ceea ce dorești, ne asigurăm că obții mobilierul perfect pentru nevoile tale unice.</p>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                        <p className='param4'>Contacteaza-ne:</p>
                        <br />
                        <p><i class="fas fa-phone"></i> Numar de telefon:</p>
                        <a href="https://www.facebook.com/MobilaSafini" className='anchor10'><i class="fab fa-facebook"></i> Facebook</a>
                        <br />
                        <a href="https://www.instagram.com/safini.tm/" className='anchor10'><i class="fab fa-instagram"></i> Instagram</a>
                    </Col>
                </Row>
                <p>Copyright 2023 Safini. Toate drepturile rezervate.</p>
            </Container>
        </div>
    )
}

export default Footer;