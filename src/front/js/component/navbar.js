import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-warning mb-3 fixed-top bg-warning">
			<Link to="/">
				<h1 className="navbar-brand mb-0 h1">UTÚ</h1>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
