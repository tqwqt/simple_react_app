import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class CarList extends Component {
	render() {
		return (
			<div>
				<ol>
					<li>1</li>
					<li>2</li>
					<li>3</li>
				</ol>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return{
		cars:state.cars
	}
}

// export default connect(mapStateToProps)(CarList);
export default CarList;