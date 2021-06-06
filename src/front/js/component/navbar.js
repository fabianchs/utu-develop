import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-warning mb-3 fixed-top bg-warning d-flex align-items-center">
			<Link to="/">
				<h3 className="text-light d-flex align-items-center">
					<img src="https://res.cloudinary.com/dubb4luoi/image/upload/v1622926480/android-icon-36x36_elru6i.png" />
					UTÚ
				</h3>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
