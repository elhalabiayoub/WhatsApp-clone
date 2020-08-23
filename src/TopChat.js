import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import Menu from "@material-ui/icons/MoreVert";
import Search from "@material-ui/icons/SearchOutlined";
import File from "@material-ui/icons/AttachFileOutlined";
import "./TopChat.css";
import db from "./firebase";
function TopChat({ room }) {
	return (
		<div className="topChat">
			{/*avatar */}

			<Avatar
				src={`	https://avatars.dicebear.com/api/human/${room?.avatar}.svg`}
				className="topChat__avatar"
			/>
			{/*name */}
			<p>{room?.name}</p>
			{/*icons */}
			<div className="topChat__icons">
				<Search className="icon" />
				<File className="icon" />
				<Menu className="icon" />
			</div>
		</div>
	);
}

export default TopChat;
