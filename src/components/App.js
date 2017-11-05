import React, {Component} from 'react';
import AppRoutes from "../AppRoutes";

class App extends Component {
	render() {
		return (
			<section className="site">
				<div className="site-content">
					<AppRoutes/>
				</div>
			</section>
		);
	}
}

export default App;
