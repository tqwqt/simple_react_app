

// function updateState(state, action) {
// 	if (action.type === 'INCREMENT'){
// 		return {count: state.count + action.amount};
// 	}else if (action.type === 'DECREMENT'){
// 		return {count: state.count - action.amount};
// 	}else {
// 		return state;
// 	}
// }
// export default class Store {
// 	constructor(updateState, state){
// 		this._state = state;
// 		this._updateState = updateState;
// 		this._callbacks = [];
// 	}
//
// 	get state(){
// 		return this._state;
// 	}
// 	update(action){
// 		this._state = this._updateState(this._state,action);
// 		this._callbacks.forEach(callback => callback());
// 	}
// 	subscribe(callback){
// 		this._callbacks.push(callback);
// 		return () => this._callbacks = this._callbacks.filter(cb => cb !== callback);
// 	}
// }
export function createStore(reducer,initialState) {
	let state = initialState;
	let callbacks = [];

	const getState = () => state;

	const dispatch = action => {
		state = reducer(state, action);
		callbacks.forEach(callback => callback());
	};

	const subscribe = callback => {
		callbacks.push(callback);
		return () => callbacks.filter(cb => cb !== callback);
	};
	dispatch({});
	return {getState, dispatch, subscribe}
}
// const initialState = { count : 0};
//
// const store = new Store(updateState,initialState);
//
// const incrementAction = {type: 'INCREMENT', amount: 5};
// const decrementAction = {type:'DECREMENT', amount: 3};
//
// const unsubscribe = store.subscribe(() => {console.log('State changed 1',store.state);});
// store.subscribe(() => {console.log('State changed 2',store.state);});
// store.update(incrementAction);
// unsubscribe();
// store.update(decrementAction);
// store.update({});
