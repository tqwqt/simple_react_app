import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import {Navbar} from 'react-bootstrap/lib'
class App extends Component {

  render() {
    return (
      <Navbar inverse>
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

export default App;
{/*<Navbar>*/}
{/*<Navbar.Header>*/}
{/*<Navbar.Brand>*/}
{/*<a href="#home">Brand</a>*/}
{/*</Navbar.Brand>*/}
{/*<Navbar.Toggle />*/}
{/*</Navbar.Header>*/}
{/*<Navbar.Collapse>*/}
{/*<Navbar.Text>*/}
{/*Signed in as: <Navbar.Link href="#">Mark Otto</Navbar.Link>*/}
{/*</Navbar.Text>*/}
{/*<Navbar.Text pullRight>Have a great day!</Navbar.Text>*/}
{/*</Navbar.Collapse>*/}
{/*</Navbar>*/}
//--------------------------
{/*<nav className="navbar navbar-expand-sm navbar-dark bg-dark ">*/}
    {/*<div className={"container-fluid "}>*/}
        {/*<div className={"navbar-header"}>*/}
            {/*<a href="#" className={"navbar-brand "}>HackDesign</a>*/}
        {/*</div>*/}
        {/*<button className="navbar-toggler" type="button" data-toggle data-target="#collapsibleNavbar">*/}
            {/*<span className="navbar-toggler-icon"></span>*/}
        {/*</button>*/}
        {/*<div className={"collapse navbar-collapse"} id={"collapsibleNavbar"}>*/}
            {/*<ul className={"navbar-nav"}>*/}
                {/*<li className="nav-item active"> <a className="nav-link" href="#">Главная</a></li>*/}
                {/*<li className="nav-item"> <a className="nav-link" href="#">Обо мне</a></li>*/}
                {/*<li className="nav-item"> <a className="nav-link" href="#">Обратная связь</a></li>*/}
            {/*</ul>*/}
        {/*</div>*/}
    {/*</div>*/}
{/*</nav>*/}
//-------------------------
{/*<div className="container-fluid">*/}
{/*<div className="row">*/}
{/*<div className="col-sm-12 order-sm-1 col-lg-5 order-lg-2" style={{backgroundColor: "#fff999"}}>*/}
{/*<div className="row">*/}
{/*<div className="col-lg-6" style={{backgroundColor: "#ff2345"}}>Uno</div>*/}
{/*<div className="col-lg-6" style={{backgroundColor: "#ff2ee5"}}>Duos</div>*/}
{/*</div>*/}
{/*</div>*/}
{/*<div className="col-sm-12 order-sm-2 col-lg-7 order-lg-1" style={{backgroundColor: "#ff6666"}}>Second</div>*/}
{/*</div>*/}
{/*</div>*/}