import React, { Component } from 'react';
import '../../App.css';
import {Navbar} from 'react-bootstrap/lib'

class NavbarComponent extends Component {
    render() {
        return (
            <Navbar inverse fluid={"true"}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">HackDesign</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Text>
                        <Navbar.Link href="#">Главная</Navbar.Link>
                    </Navbar.Text>
                    <Navbar.Text>
                        <Navbar.Link href="#">О себе</Navbar.Link>
                    </Navbar.Text>
                    <Navbar.Text>
                        <Navbar.Link href="#" >Обратная связь</Navbar.Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

NavbarComponent.propTypes = {};

export default NavbarComponent;