import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import ChatArea from './components/ChatArea'
import InfoBar from './components/infoBar'
import ChatRoomNav from './components/chatRoomNav'

import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container, Row, Col } from 'react-bootstrap';
import {Button, InputGroup, FormControl } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
 
      <Row>
        <Col>1 of 3</Col>
        <Col><ChatArea /></Col>
        <Col> <InfoBar /></Col>
      </Row>
      <Row>
        <Col>
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
        </Col>        
      </Row>

    </div>
  );
}
export default App;