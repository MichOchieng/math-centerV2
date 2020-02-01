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
      <Row className="mainUi">
        <Col className="ChatRoomNav"> <ChatRoomNav /> </Col>
        <Col xs={6}> <ChatArea /> </Col>
        <Col> <InfoBar /> </Col>
      </Row>     
    </div>
  );
}
export default App;