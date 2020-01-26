import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';

import ChatArea from './components/ChatArea'
import InfoBar from './components/infoBar'
import ChatRoomNav from './components/chatRoomNav'

import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  return (
    <div className="App">        
      <Jumbotron>
        <h1 className="header">Welcome To Math Center</h1>
      </Jumbotron>
      <Container>
        <Row>
          <Col>1 of 3</Col>
          <Col xs={6}>2 of 3 (wider)</Col>
          <Col><InfoBar /></Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default App;
