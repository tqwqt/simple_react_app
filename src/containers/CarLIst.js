import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {select} from "../actions";

class CarList extends Component {
	showList = () =>{
		return this.props.orders.map((order) => {
			return <li onClick={() => this.props.select(order)} key={order.id}>{order.name}</li>
		});
	};
	render() {
		return (
			<div>
				<ol>
					{this.showList()}
				</ol>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return{
		orders:state.orders
	}
}
function matchDispatchToProps(dispatch) {
	return bindActionCreators({select: select}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(CarList);
// export default CarList;