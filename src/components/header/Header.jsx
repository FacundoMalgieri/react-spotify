import React, {Component} from 'react';
import logo from '../../assets/images/logo.png';
import {Link} from "react-router-dom";
import './Header.css'
import {Nav, Navbar, NavItem} from "react-bootstrap";
import {connect} from 'react-redux';
import * as authActions from '../../actions/actions';

class Header extends Component {
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
			<Navbar className="bg-lightb text-black no-border-radius" inverse collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/"><img src={logo} className="logo" alt="logo"/></Link>
					</Navbar.Brand>
					<Navbar.Toggle/>
				</Navbar.Header>
				<Navbar.Collapse className="text-center">
					<Nav pullRight>
						<NavItem componentClass="span" eventKey={1} href="#">
							<Link to="/home" className="header-link">Home</Link>
						</NavItem>
						<NavItem componentClass="span" eventKey={3} href="#">
							<Link to="/explore" className="header-link">Explore</Link>
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		auth: state.reducer
	};
}

export default connect(mapStateToProps)(Header);
