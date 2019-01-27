import {combineReducers} from 'redux'
import OrderReducer from './Order'
import ActiveCar from './order-active'

const allReducers = combineReducers({
	orders: OrderReducer,
	active: ActiveCar
});

export default allReducers;