import React, {Component} from 'react';
import {connect} from 'react-redux'

class Details extends Component {
	render() {
		if (!this.props.order)
		{
			return (<div>Not chosen</div>)
		}
		return (
			<div>
				<h2>{this.props.order.name}</h2>
				<img src={this.props.order.img}/>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return{
		order:state.active
	}
}

export default connect(mapStateToProps)(Details);