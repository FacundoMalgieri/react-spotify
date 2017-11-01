import React from 'react';
import './Home.css'
import icon from '../../assets/images/icon.png'
import {Component} from 'react/cjs/react.production.min';
import {connect} from 'react-redux';
import * as authActions from '../../actions/actions';

class Home extends Component {
	constructor(props, context) {
		super(props, context);
		this.getToken = this.getToken.bind(this);
	}

	getToken() {
		console.log(this.props);
		debugger;
		this.props.dispatch(authActions.generateToken());
	}

	render() {
		return (
			<section className="container mar-t">
				<div className="jumbotron bg-lightb">
					<h1 className="t-white">Spotify</h1>
					<h2 className="t-white">Music for everyone!</h2>
					<a className="btn btn-lg btn-default mar-t" onClick={this.getToken}>Explore</a>
					<img src={icon} className="icon" alt="logo"/>
				</div>
			</section>
		);
	};
}

function mapStateToProps(state, ownProps) {
	return {
		auth: state.reducer
	};
}

export default connect(mapStateToProps)(Home);
