import React, { Component, useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [auth, setAuth] = useState(false);
	const { store, actions } = useContext(Context);

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			email: email,
			password: password
		};
		let url = store.api_url + "/api/login";
		fetch(url, {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				actions.savingToken(data.token, data.user_id);
				//sessionStorage.setItem("my_token", data.token);
				//setAuth(true);
			})
			.catch(err => console.log(err));
	};

	return (
		// <div className="mx-auto pt-5">
		<div className="mx-auto pt-5 m-5">
			<h1>Login</h1>
			<form onSubmit={handleSubmit} style={{ width: "500px" }}>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Dirección de correo electrónico
					</label>
					<input
						onChange={e => setEmail(e.target.value)}
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					/>
					{/* <div id="emailHelp" className="form-text">
						Nos tomamos en serio la privacidad y seguridad de los datos personales!
					</div> */}
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Contraseña
					</label>
					<input
						onChange={e => setPassword(e.target.value)}
						type="password"
						className="form-control"
						id="exampleInputPassword1"
					/>
					<small>
						<Link to="/restore">¿Olvidaste la contraseña?</Link>
					</small>
				</div>

				<button type="submit" className="btn btn-primary">
					Ingresar
				</button>
				{store.userLogged ? <Redirect to="/garden" /> : <Redirect to="/login" />}
			</form>
		</div>
	);
};
