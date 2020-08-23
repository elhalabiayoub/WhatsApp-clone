import React, { useState, useEffect } from "react";
import "./Room.css";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import db from "./firebase";
function Room({ room, add }) {
	const onClickHandler = () => {
		const name = prompt("entrer svp le nom du room  :");
		if (name) {
			db.collection("rooms").add({
				avatar: Math.floor(Math.random() * 50000),
				name: name,
				lastMessage: "",
			});
		}
	};
	return !add ? (
		<Link to={`/rooms/${room.id}`}>
			<div className="room">
				{/*avatar */}
				<Avatar
					src={`	https://avatars.dicebear.com/api/human/${room.data.avatar}.svg`}
					className="room__avatar"
				/>
				<div className="room__content">
					{/*roomName */}
					<h4> {room.data.name}</h4>
					{/*lastMessage */}
					<p>{room.data.lastMessage}</p>
				</div>
			</div>
		</Link>
	) : (
		<div className="room">
			{/*avatar */}

			<div className="room__addNew" onClick={onClickHandler}>
				<h4> Add new room</h4>
			</div>
		</div>
	);
}

export default Room;
