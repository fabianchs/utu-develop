import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-warning fixed-top">
			<div className="container">
				<div className="navbar-brand">
					<Link to="/">
						<span className="h2 d-flex align-items-center text-light ">
							<img
								height="auto "
								src="https://res.cloudinary.com/dubb4luoi/image/upload/v1622926480/android-icon-36x36_elru6i.png"
							/>
							UTÚ
						</span>
					</Link>
				</div>
				<button
					type="button"
					className="navbar-toggler"
					data-toggle="collapse"
					data-target="#principal-menu"
					aria-controls="principal-menu"
					aria-expanded="false"
					aria-label="Desplegar menú de navegación">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="principal-menu">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link to="/practice" className="nav-link text-light h3">
								Práctica
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/login" className="nav-link text-light h3">
								Ingresar
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/register" className="nav-link text-light h3">
								Registrarme
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
