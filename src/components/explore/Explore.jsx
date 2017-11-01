import React, {Component} from 'react';
import {connect} from 'react-redux';
import './explore.css';
import * as actions from '../../actions/actions';
import {bindActionCreators} from 'redux';
import ResultsList from './results/ResultsList';

class Explore extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			search: {value: ""}
		};
		this.search = this.search.bind(this);
	}

	search(event) {
		const search = this.state.search;
		search.value = event.target.value;
		this.setState({search});
		this.props.actions.search(search);
	}

	render() {
		const {results} = this.props;
		console.log(results);
		return (
			<section className="container mar-t">
				<div className="jumbotron bg-lightb">
					<input type="text"
					       placeholder="Search..."
					       className="search"
					       onChange={this.search}/>
				</div>
				<ResultsList results={results}/>
			</section>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		results: state.reducer
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Explore);