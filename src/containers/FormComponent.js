import React, {Component} from 'react';
import {createStore} from 'redux'

const initialState = {count : 0};

function reducer(state ={count: 0}, action) {
	switch (action.type) {
		case 'INCREMENT': return {count: state.count + action.amount};
		case 'DECREMENT': return {count: state.count - action.amount};
		case 'RESET': return {count: 0};
		default: return state;
	}
}
function increment(amount) {
	return {type: 'INCREMENT',amount}
}
function decrement(amount) {
	return {type: 'DECREMENT',amount}
}
function reset() {
	return{ type: 'RESET'}
}
const store = createStore(reducer);

class FormComponent extends Component {
	constructor(props){
		super(props);
	}
	componentDidMount() {
		store.subscribe(() => {
			this.forceUpdate();
		})
	}
	render() {
		return (
			<div className="container-fluid row justify-content-center orderFormDiv">
				<form role={"form"} className="col-lg-6 orderForm">
					<h5  id="formHeader">Сделайте заказ и я свяжусь с вами!</h5>
					<div className={"form-group"}>
						<label className="control-label orderLabel" htmlFor="name">Имя</label>{/*control-label is needed for grid system*/}
						<input type={"text"} className={"form-control"} id={"name"} placeholder={"Введите имя"}/>
						{/*<p className="help-block">Some help</p>*/}
					</div>
					<div className={"form-group"}>
						<label className="control-label orderLabel" htmlFor="surname">Фамилия</label>
						<input type={"text"} className={"form-control"} id={"surname"} placeholder={"Введите фамилию"}/>
						{/*<p className="help-block">Some help</p>*/}
					</div>
					<div className={"form-group"}>
						<label className="control-label orderLabel" htmlFor="email">Email</label>
						<input type={"email"} className={"form-control"} id={"email"} placeholder={"Введите электронную почту"}/>
						{/*<p className="help-block">Some help</p>*/}
					</div>
					<div className={"form-group"}>
						<label className="control-label orderLabel" htmlFor="description">Краткое описание заказа</label>
						<input type={"text"} className={"form-control"} id={"description"} placeholder={"Описание"}/>
						{/*<p className="help-block">Some help</p>*/}
					</div>
					<div className="orderBtnDiv"><button type="button" className="btn btn-success orderBtn">Отправить</button></div>
				</form>
			</div>
		);
	}
}

FormComponent.propTypes = {};

export default FormComponent;