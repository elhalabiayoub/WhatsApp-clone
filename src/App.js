import React, { useState, useEffect } from "react";

import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { connect } from "react-redux";

function App(props) {
	return (
		<div className="app">
			{/*user auth */ console.log(props.user)}
			{!props.user ? (
				<Login />
			) : (
				<div className="app__body">
					<Router>
						<Sidebar />
						<Switch>
							<Route path="/" exact></Route>
							<Route path="/rooms/:roomId">
								<Chat />
							</Route>
						</Switch>
					</Router>
				</div>
			)}
		</div>
	);
}

function mapStateToProps(state) {
	return {
		user: state.user,
	};
}
export default connect(mapStateToProps)(App);
