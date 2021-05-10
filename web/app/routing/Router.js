import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Users from '../components/pages/users'
import UsersById from '../components/pages/usersById'


export default function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Users} />
				<Route exact path="/users" component={Users} />
				<Route path="/users/:userid" component={UsersById} />
			</Switch>
		</BrowserRouter>
	);
}
