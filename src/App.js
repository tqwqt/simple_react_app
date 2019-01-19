import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar} from 'react-bootstrap/lib'
import NavbarComponent from './components/Header/NavbarComponent'

class App extends Component {

  render() {
    return (
    	<div>
	        <NavbarComponent/>
		    <div className={"container"}>
			    <form role={"form"}>
				    <div className={"form-group"}>
					    <label className="control-label col-md-2" htmlFor="name">Имя</label>{/*control-label is needed for grid system*/}
					    <div className="col-md-10">
					        <input type={"text"} className={"form-control"} id={"name"} placeholder={"Введите имя"}/>
					        <p className="help-block">Some help</p>
					    </div>
				    </div>
				    <select className="form-control">
					    <option>1</option>
					    <option>3</option>
					    <option>2</option>
				    </select>
				    <div className="radio">
					    <label>
						    <input type="radio" checked/>
						    First
					    </label>
				    </div>
				    <div className="radio">
					    <label>
						    <input type="radio" />
						    Second
					    </label>
				    </div>
				    <div className={"form-group"}>
					    <label className="control-label col-md-2" htmlFor="surname">Фамилия</label>
					    <div className="col-md-10">
					        <input type={"text"} className={"form-control"} id={"surname"} placeholder={"Введите имя"}/>
					        <p className="help-block">Some help</p>
					    </div>
				    </div>
				    <div className="checkbox">
					    <label htmlFor="">
					        <input type="checkbox"/>CheckBox
					    </label>
				    </div>
				    <button type="button" className="btn btn-success">Отправить</button>
			    </form>
		    </div>
	    </div>



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