import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';

import ChatArea from './components/ChatArea'
import InfoBar from './components/infoBar'
import ChatRoomNav from './components/chatRoomNav'

import { Container, Row, Col } from 'react-bootstrap';
import {Button, InputGroup, FormControl } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://localhost:3000"
    }
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("connected", data => this.setState({response: data}))
  }
}

function App() {
  const {response} = this.state;
  return (
    <div className="App">
 
      <Row>
        <Col>{response}</Col>
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