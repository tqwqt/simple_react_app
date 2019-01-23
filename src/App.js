import React, { Component } from 'react';
import './App.css';
import {Navbar} from 'react-bootstrap/lib'
import NavbarComponent from './components/Header/NavbarComponent'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/style.css';

const options = {
	rewind: true,
	autoplay: true,
	loop:true,
	margin:10,
	dots:true,
	dotsEach: true,
	dotData: true,
	responsive:{
		0:{
			items:1,
			nav: true
		},
		600:{
			items:2,
			nav: true
		},
		1200:{
			items:3,
			nav: true,
			dots:true,
			dotsEach: true,
			dotData: true
		}}
	};
const events = {
	onDragged: function(event) {},
	onChanged: function(event) {}
};
class App extends Component {

  render() {
    return (
    	<div>
	        <NavbarComponent/>
		    <div className="container-fluid main">
			    <div className="row">
					<h1 className="col ">Дизайн логотипов</h1>
			    </div>
			    <OwlCarousel ref="car" options={options} events={events} >
				    <div ><img className="p_img" src="/portfolio/pavlo.png"/></div>
				    <div ><img className="p_img" src="/portfolio/plant.png"/></div>
				    <div ><img className="p_img" src="/portfolio/hack.png"/></div>
				    <div ><img className="p_img" src="/portfolio/vteme.png"/></div>
				    <div ><img className="p_img" src="/portfolio/malakhov.png"/></div>
				    <div ><img className="p_img" src="/portfolio/shuman.png"/></div>
				    <div ><img className="p_img" src="/portfolio/to_israel.png"/></div>
			    </OwlCarousel>
		    </div>

	    </div>



    );
  }
}

export default App;
