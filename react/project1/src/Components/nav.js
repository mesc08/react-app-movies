import React from "react";
import {Link} from "react-router-dom";
import "./nav.css";

function Navbar(){
	return (
		<div className = "nav">
			<Link to="/">Home</Link>
			<Link to="/">About</Link>
		</div>
		);
}

export default Navbar;