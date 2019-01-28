import React from 'react'
import {Component} from 'react'
// import {createStore} from 'redux'
//
// const initialState = {count : 0};
//
// function reducer(state ={count: 0}, action) {
// 	switch (action.type) {
// 		case 'INCREMENT': return {count: state.count + action.amount};
// 		case 'DECREMENT': return {count: state.count - action.amount};
// 		case 'RESET': return {count: 0};
// 		default: return state;
// 	}
// }
// function increment(amount) {
// 	return {type: 'INCREMENT',amount}
// }
// function decrement(amount) {
// 	return {type: 'DECREMENT',amount}
// }
// function reset() {
// 	return{ type: 'RESET'}
// }
// const incrementAction = {type: 'INCREMENT', amount: 1};
// const decrementAction = {type: 'DECREMENT', amount: 1};
// const resetAction = {type: 'RESET'};
// const store = createStore(reducer);

// class Dojo extends Component{
// 	constructor(props){
// 		super(props);
//
// 	}
//
// 	componentDidMount() {
// 		store.subscribe(() => {
// 			this.forceUpdate();
// 		})
// 	}
//
// 	increment = () => {
// 		let amount = parseInt(this.refs.amount.value || 1);
// 		store.dispatch(increment(amount));
// 	};
// 	decrement = () => {
// 		let amount = parseInt(this.refs.amount.value || 1);
// 		store.dispatch(decrement(amount));
// 	};
// 	reset = () => {
// 		store.dispatch(reset());
// 	};
// 	render(){
// 		const  count = store.getState().count;
// 		return(
// 			<div className="container-fluid">
// 				<p className="row " style={{color: "white"}}><span className="col-12">{count}</span></p>
// 				<div className="row">
// 					<button className={'inc'} onClick={this.increment}>+</button>
// 					<button className={'dec'} onClick={this.decrement}>-</button>
// 				</div>
// 				<button className={"row"} onClick={this.reset}>Clean</button>
// 				<input className="row" type="text" ref={"amount"} defaultValue="1"/>
// 			</div>
// 		)
// 	}
// }
//
// export default Dojo;