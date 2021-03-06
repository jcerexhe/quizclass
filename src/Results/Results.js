import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Results extends Component {
	render() {
		return (
			<div>
				<h3>{this.props.end_message}</h3>
				<p>Your score was: {this.props.score}</p>
				<button onClick={this.props.restart}>Retry</button>
			</div>
		)
	}
}

Results.propTypes = {
	end_message: PropTypes.string,
	score: PropTypes.number.isRequired,
	restart: PropTypes.func.isRequired
}

Results.defaultProps = {
	end_message: 'CONGRATULATIONS!!!'
}

export default Results;
