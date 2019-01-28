import React from 'react'
import {Component} from 'react'
import Store from '../codedojo'

const initialState = {count : 0};

function updateState(state, action) {
	switch (action.type) {
		case 'INCREMENT': return {count: state.count + action.amount};
		case 'DECREMENT': return {count: state.count - action.amount};
		default: return state;
	}
}
const incrementAction = {type: 'INCREMENT', amount: 1};
const decrementAction = {type: 'DECREMENT', amount: 1};
const store = new Store(updateState, initialState);

class Dojo extends Component{
	constructor(props){
		super(props);

	}

	componentDidMount() {
		store.subscribe(() => {
			this.forceUpdate();
		})
	}

	increment = () => {
		store.update(incrementAction)
	};
	decrement = () => {
		store.update(decrementAction)
	};

	render(){
		return(
			<div className={"counter"}>
				<span className={"count"}>{store.state.count}</span>
				<div className="buttons">
					<button className={'inc'} onClick={this.increment}>+</button>
					<button className={'dec'} onClick={this.decrement}>-</button>
				</div>
			</div>
		)
	}
}

export default Dojo;