import React, { Component } from 'react';

import { Container, ListGroup, Button, InputGroup, FormControl } from 'react-bootstrap';

class ChatArea extends Component {
    render() {
        return (
            <Container>
                <ListGroup id="message-container">
                    <ListGroup.Item>Cuppa: Hello</ListGroup.Item>
                    <ListGroup.Item>Mo: Hello</ListGroup.Item>
                    <ListGroup.Item>Cuppa: yes</ListGroup.Item>
                </ListGroup>

                <InputGroup className="mb-3" id="send-container">
                    <FormControl
                    placeholder="Your message"
                    aria-label="Your message"
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                    <Button variant="outline-secondary">Send</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Container>
        );
    }
}

export default ChatArea;