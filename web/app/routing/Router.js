import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import {Users, UserById} from '../components/pages'


export default function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<Redirect from="/" to="/users" />
				<Route exact path="/users" component={Users} />
				<Route path="/users/:userid" component={UserById} />
			</Switch>
		</BrowserRouter>
	);
}
