import React, { useState } from "react";
import "./BottomChat.css";
import Emoji from "@material-ui/icons/EmojiEmotionsOutlined";
import Mic from "@material-ui/icons/Mic";
import db from "./firebase";
import firebase from "firebase";
import { connect } from "react-redux";

function BottomChat({ roomId, user, scrollToBottom }) {
	const [inputValue, setInputValue] = useState("");
	const onChangeHandler = (e) => {
		setInputValue(e.target.value);
	};
	const onSubmitHandler = (e) => {
		e.preventDefault();
		db.collection("rooms").doc(roomId).collection("messages").add({
			message: inputValue,
			sentBy: user?.displayName,
			img: user?.photoURL,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		db.collection("rooms").doc(roomId).update({
			lastMessage: inputValue,
		});
		setInputValue("");
		scrollToBottom();
	};
	return (
		<div className="bottomChat">
			{/* emojies */}
			<Emoji className="bottomChat__emoji" />

			{/* form */}
			<div className="bottomChat__form">
				<form onSubmit={onSubmitHandler}>
					<input
						onChange={onChangeHandler}
						placeholder="Taper un message"
						value={inputValue}
					/>
				</form>
			</div>

			{/* vocal */}
			<Mic className="bottomChat__mic" />
		</div>
	);
}

function mapStateToProps(state) {
	return {
		user: state.user,
	};
}
export default connect(mapStateToProps)(BottomChat);
