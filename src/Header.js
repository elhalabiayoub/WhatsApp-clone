import React, { useState, useEffect } from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import ChatOutlined from "@material-ui/icons/ChatOutlined";
import Menu from "@material-ui/icons/MoreVert";
import Loop from "@material-ui/icons/LoopOutlined";
import { connect } from "react-redux";
function Header(props) {
	const [seed, setSeed] = useState(null);
	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, []);
	return (
		<div className="header">
			{/*avatar */}

			<Avatar src={props.user?.photoURL} />
			{/*3 icons */}
			<div className="header__icons">
				<Loop className="icon" />
				<ChatOutlined className="icon" />
				<Menu className="icon" />
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		user: state.user,
	};
}
export default connect(mapStateToProps)(Header);
