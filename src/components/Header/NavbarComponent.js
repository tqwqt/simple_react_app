import React, { Component } from 'react';
import '../../App.css';
import {Navbar} from 'react-bootstrap/lib'

class NavbarComponent extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <a className="navbar-brand" href="#">HackDesign</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="navbar-item active"><a className="nav-link" >Главная</a></li>
                <li className="navbar-item "><a className="nav-link" >О себе</a></li>
                <li className="navbar-item "><a className="nav-link" >Обратная связь</a></li>
                </ul>
                </div>
            </nav>
        );
    }
}

NavbarComponent.propTypes = {};

export default NavbarComponent;



//-----------------------
{/*<Navbar inverse fluid={"true"}>*/}
    {/*<Navbar.Header>*/}
        {/*<Navbar.Brand>*/}
            {/*<a href="#home">HackDesign</a>*/}
        {/*</Navbar.Brand>*/}
        {/*<Navbar.Toggle />*/}
    {/*</Navbar.Header>*/}
    {/*<Navbar.Collapse>*/}
        {/*<Navbar.Text>*/}
            {/*<Navbar.Link href="#" >Главная</Navbar.Link>*/}
        {/*</Navbar.Text>*/}
        {/*<Navbar.Text>*/}
            {/*<Navbar.Link href="#">О себе</Navbar.Link>*/}
        {/*</Navbar.Text>*/}
        {/*<Navbar.Text>*/}
            {/*<Navbar.Link href="#" >Обратная связь</Navbar.Link>*/}
        {/*</Navbar.Text>*/}
    {/*</Navbar.Collapse>*/}
{/*</Navbar>*/}