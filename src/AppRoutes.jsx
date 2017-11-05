import React from 'react';
import Explore from "./components/explore/Explore";
import Comments from './components/explore/comments/Comments';
import {Route, Switch} from 'react-router-dom'
import registerServiceWorker from "./registerServiceWorker";

const AppRoutes = () => (
	<Switch>
		<Route exact path="/" component={Explore}/>
		<Route path="/explore" component={Explore}/>
		<Route path="/comments/:id" component={Comments}/>
	</Switch>
);
registerServiceWorker();

export default AppRoutes;