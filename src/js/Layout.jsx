import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Store from "./store/appContext.jsx";
import DashboardHome from "./views/DashboardHome.js";
import EditContact from "./views/EditContact.jsx";
import AddContact from "./views/AddContact.jsx";

class Layout extends React.Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Switch>
							<Route exact path="/index.html" component={DashboardHome} />
							<Route exact path="/" component={DashboardHome} />
							<Route exact path="/contacts" component={DashboardHome} />
							<Route exact path="/add" component={AddContact} />
							<Route exact path="/edit/:id" component={EditContact} />
							<Route render={() => <h1 className="notfound">Not found!</h1>} />
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default Store(Layout);
