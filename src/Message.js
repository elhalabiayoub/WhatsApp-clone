import React from "react";
import "./Message.css";
import { connect } from "react-redux";
import { Avatar } from "@material-ui/core";

function Messages({ message, user }) {
	return (
		<div className="message">
			{message.sentBy != user?.displayName ? (
				<Avatar className="message__avatar" src={message.img} />
			) : (
				""
			)}

			<div
				className={
					message.sentBy == user?.displayName
						? "message__blockright message__block"
						: "message__block"
				}
			>
				<span
					className={
						message.sentBy == user?.displayName
							? "message__nameright message__name"
							: "message__name"
					}
				>
					{message.sentBy == user?.displayName ? "me" : message.sentBy}
				</span>
				<p
					className={
						message.sentBy == user?.displayName
							? "message__send message__text"
							: "message__text"
					}
				>
					{message.message}
				</p>
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		user: state.user,
	};
}
export default connect(mapStateToProps)(Messages);
