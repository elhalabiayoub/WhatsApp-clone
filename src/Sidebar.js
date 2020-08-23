import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import Header from "./Header";
import Search from "@material-ui/icons/SearchOutlined";
import Room from "./Room";
import db from "./firebase.js";

function Sidebar() {
	const [rooms, setRooms] = useState([]);
	useEffect(() => {
		db.collection("rooms").onSnapshot((snapshot) => {
			setRooms(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			);
		});
	}, []);

	return (
		<div className="sidebar">
			{/* header */}
			<div className="sidebar__header">
				<Header />
			</div>
			{/* search */}
			<div className="sidebar__search">
				<div className="sidebar__searchContainer">
					<Search className="searchIcon" />
					<input placeholder="Rechercher ou démarrer une nouvelle discussion" />
				</div>
			</div>
			{/* rooms */}
			<div className="sidebar__rooms">
				<Room key="text" add />
				{rooms.map((room) => {
					return <Room key={room.id} room={room} />;
				})}
			</div>
		</div>
	);
}

export default Sidebar;
