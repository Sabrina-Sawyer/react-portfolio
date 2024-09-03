import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleBlur = (field, value) => {
        if (value.trim() === '') {
            alert(`${field} field cannot be empty.`);
        }
    };

    const handleEmailBlur = () => {
        if (email.trim() === '') {
            handleBlur('Email', email);
        } else if (!email.includes('@')) {
            alert('Please enter a valid email address with an "@" symbol.');
        }
    };

    return (
        <Form style={{ margin: '2rem' }}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name:</Form.Label>
                <Form.Control 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => {
                        if (name.trim() === '') {
                            handleBlur('Name', name);
                        }
                    }}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address:</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="name@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={handleEmailBlur} 
                    required 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message:</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={3} 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onBlur={() => {
                        if (message.trim() === '') {
                            handleBlur('Message', message);
                        }
                    }}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Contact;
