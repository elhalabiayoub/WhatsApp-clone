import React, { useState, useEffect } from "react";
import "./Chat.css";
import TopChat from "./TopChat";
import Messages from "./Message";
import BottomChat from "./BottomChat";
import { useParams } from "react-router-dom";

import db from "./firebase";
function Chat() {
	const [messages, setMessages] = useState([]);
	const { roomId } = useParams();
	const [room, setRoom] = useState("");
	var row = db.collection("rooms").doc(roomId);
	const scrollToBottom = () => {
		const div = document.querySelector(".chat__messages");
		console.log(div.scrollHeight);
		div.scrollTop = div.scrollHeight;
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);
	useEffect(() => {
		row.onSnapshot((snapshot) => setRoom(snapshot.data()));
	}, [roomId]);
	useEffect(() => {
		row
			.collection("messages")
			.orderBy("timestamp", "asc")
			.onSnapshot((snapshot) => {
				setMessages(
					snapshot.docs.map((doc) => {
						return doc.data();
					})
				);
			});
	}, [roomId]);

	return (
		<div className="chat">
			{/*top */}
			<div className="chat__top">
				<TopChat room={room} />
			</div>
			{/*messages */}

			<div className="chat__messages">
				{messages.map((message) => {
					return <Messages message={message} />;
				})}
			</div>

			{/*bottom */}
			<div className="chat__bottom">
				<BottomChat
					roomId={roomId}
					scrollToBottom={scrollToBottom.bind(this)}
				/>
			</div>
		</div>
	);
}

export default Chat;
