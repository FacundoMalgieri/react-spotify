import React, {Component} from 'react';
import {connect} from 'react-redux';
import './explore.css';
import * as actions from '../../actions/actions';
import {bindActionCreators} from 'redux';
import ResultsList from './results/ResultsList';
import {Navbar} from 'react-bootstrap';

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
		return (
			<div>
				<Navbar className="bg-lightb pad-1 text-black no-border-radius no-borde" inverse collapseOnSelect>
					<input type="text"
					       placeholder="Search..."
					       className="search"
					       onChange={this.search}/>
				</Navbar>
				<section className="container">

					<ResultsList results={results}/>
				</section>
			</div>
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