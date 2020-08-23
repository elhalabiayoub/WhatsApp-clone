import React from "react";
import { Button } from "@material-ui/core";
import { src } from "./imageSrc";
import "./Login.css";
import { auth, provider } from "./firebase";
import { connect } from "react-redux";
import { signIn } from "./redux/actions/rootActions";
function Login(props) {
	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				props.signIn(result.user);
			})
			.catch((error) => console.log(error.message));
	};
	return (
		<div className="login">
			<img src={src} />
			<h2>Sign in to youtube</h2>
			<Button onClick={signIn} className="login__button">
				Sign in with Google
			</Button>
		</div>
	);
}

export default connect(null, { signIn })(Login);
