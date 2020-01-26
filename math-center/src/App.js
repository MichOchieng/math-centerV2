import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';

import ChatArea from './components/ChatArea'

import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <ChatArea />
    </div>
  );
}

export default App;
