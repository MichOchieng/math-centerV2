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
      <Row className="noPadding">
        <Col> <ChatRoomNav /> </Col>
        <Col> <ChatArea /> </Col>
        <Col> <InfoBar /> </Col>
      </Row>

      <Row className="noPadding">
        <Col id="inputForm">
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <Button variant="outline-success">Send</Button>
            </InputGroup.Prepend>
            <FormControl 
              aria-describedby="basic-addon1" 
              placeholder="Join the conversation!" 
            />
          </InputGroup>
        </Col>        
      </Row>
    
    </div>
  );
}
export default App;