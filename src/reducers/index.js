import {combineReducers} from 'redux'
import OrderReducer from './Order'

const allReducers = combineReducers({
	orders: OrderReducer,
});

export default allReducers;