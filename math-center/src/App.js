import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';

import ChatArea from './components/ChatArea'
import InfoBar from './components/infoBar'
import ChatRoomNav from './components/chatRoomNav'

import { Container, Row, Col } from 'react-bootstrap';

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
      
    </div>
  );
}

export default App;