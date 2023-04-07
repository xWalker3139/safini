import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

import '../App.js';

function Product(){
    return(
        <div id='produsele_noastre'>
        <div className='product'>
            <h1>Produsele noastre</h1>
            <br />
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <Row>
                            <Col lg={4} md={4} sm={6}>
                                <img src="images/imagine2.jpg" className='image2'></img>
                            </Col>
                            <Col lg={4} md={4} sm={6}>
                                <img src="images/imagine3.jpg" className='image2'></img>
                            </Col>
                            <Col lg={4} md={4} sm={6}>
                                <img src="images/imagine4.jpg" className='image2'></img>
                            </Col>
                        </Row>
                        <Carousel.Caption>
                            <h2 className='header10'>Mobila pentru bucatarie</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col lg={4} md={4} sm={6}>
                                <img src="images/imagine5.jpg" className='image2'></img>
                            </Col>
                            <Col lg={4} md={4} sm={6}>
                                <img src="images/imagine6.jpg" className='image2'></img>
                            </Col>
                            <Col lg={4} md={4} sm={6}>
                                <img src="images/imagine7.jpg" className='image2'></img>
                            </Col>
                        </Row>
                        <Carousel.Caption>
                            <h2 className='header10'>Mobila pentru dormitor</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col lg={4} md={4} sm={6}>
                                <img src="images/imagine8.jpg" className='image2'></img>
                            </Col>
                            <Col lg={4} md={4} sm={6}>
                                <img src="images/imagine9.jpg" className='image2'></img>
                            </Col>
                            <Col lg={4} md={4} sm={6}>
                                <img src="images/imagine10.jpg" className='image2'></img>
                            </Col>
                        </Row>
                        <Carousel.Caption>
                            <h2 className='header10'>Apartament cu randari</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
        </div>
    )
}

export default Product;
