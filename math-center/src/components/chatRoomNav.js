import React, { Component } from 'react';
import { Container, ListGroup, Button, InputGroup, FormControl } from 'react-bootstrap';

class ChatRoomNav extends Component {
    render() {
        return (
            <Container>
                <div class="chatNav">
                    <h1 class="chatNavHeader">
                        Dashboard
                    </h1>
                    <ul>
                        <li>Home</li>
                        <li>General</li>
                        <li>Linear Algebra</li>
                        <li>Discrete Math</li>
                        <li>Big Brain Chat</li>
                        <li>General</li>

                    </ul>
                </div>
            </Container>
        );
    }
    
}

export default ChatRoomNav;