import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

class InfoBar extends Component {
    render() {
        return (
            <Container>
                <div class="infoBar">
                    <h1 class="infoBarHeader">
                        Users
                    </h1>
                    <ul class="userList">
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ul>
                </div>
            </Container>
        );
    }
}

export default InfoBar;