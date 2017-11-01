import React from 'react';
import Home from './components/home/Home';
import About from './components/about/About';
import Explore from "./components/explore/Explore";
import Comments from './components/explore/comments/Comments';
import {Route, Switch} from 'react-router-dom'
import registerServiceWorker from "./registerServiceWorker";

const AppRoutes = () => (
	<Switch>
		<Route exact path="/" component={Home}/>
		<Route path="/home" component={Home}/>
		<Route path="/about" component={About}/>
		<Route path="/explore" component={Explore}/>
		<Route path="/comments/:id" component={Comments}/>
	</Switch>
);
registerServiceWorker();

export default AppRoutes;