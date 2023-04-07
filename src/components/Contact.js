import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

import '../App.css';

function Contact(){
    const [ numele, setNumele ] = useState('');
    const [ prenumele, setPrenumele ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ mesaj, setMesaj ] = useState('');

    return(
        <div id='contact'>
        <div className='new_banner5'>
            <div className='contact'>
                <img src='/images/imagine1.jpg' className="image5" />
                <Form className='form' method='POST'>
                    <h1>Contacteaza-ne</h1>
                    <br></br>
                    <Form.Label>Numele:</Form.Label>
                    <Form.Control placeholder='Numele tau...' type='text' required></Form.Control>
                    <Form.Label className='form-label'>Prenumele:</Form.Label>
                    <Form.Control placeholder='Prenumele tau...' type='text' required></Form.Control>
                    <Form.Label className='form-label'>Email:</Form.Label>
                    <Form.Control placeholder='Email...' type='email' required></Form.Control>
                    <Form.Label className='form-label'>Mesaj:</Form.Label>
                    <Form.Control placeholder='Mesaj...' type='text' required></Form.Control>
                    <br />
                    <input type="submit" className="btn btn-outline-info btn-block" value="Contacteaza-ne" />
                </Form>
            </div>
        </div>
        </div>
    )
}

export default Contact;