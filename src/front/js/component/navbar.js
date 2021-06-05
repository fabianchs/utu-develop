import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-warning mb-3 fixed-top bg-warning">
			<Link to="/">
				<img src="https://res.cloudinary.com/dubb4luoi/image/upload/v1622926480/android-icon-36x36_elru6i.png" />
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
