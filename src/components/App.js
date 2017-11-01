import React, {Component} from 'react';
import Header from './header/Header';
import AppRoutes from "../AppRoutes";

class App extends Component {
	render() {
		return (
			<section className="site">
				<div className="site-content">
					<Header/>
					<AppRoutes/>
				</div>
			</section>
		);
	}
}

export default App;
