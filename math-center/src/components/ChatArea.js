import React, { Component } from 'react';

import { Container, ListGroup, Button, InputGroup, FormControl } from 'react-bootstrap';

class ChatArea extends Component {
    render() {
        return (
            <div class="chatContainer">
                {/* Chat Container */}
               <Container>
                    <ListGroup id="message-container">
                        <ListGroup.Item>Cuppa: Hello</ListGroup.Item>
                        <ListGroup.Item>Mo: Hello</ListGroup.Item>
                        <ListGroup.Item>Cuppa: yes</ListGroup.Item>
                    </ListGroup>                     
                </Container> 
                {/* Input button container */}
                <Container>
                    <InputGroup className="sendButton">
                        <InputGroup.Prepend>
                        <Button variant="outline-success">Send</Button>
                        </InputGroup.Prepend>
                        <FormControl 
                        aria-describedby="basic-addon1" 
                        placeholder="Join the conversation!" 
                        />
                    </InputGroup> 
                </Container>
            </div>
            

            
        );
    }
}

export default ChatArea;