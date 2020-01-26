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

                
            </Container>
        );
    }
}

export default ChatArea;