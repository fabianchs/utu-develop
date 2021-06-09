import React, { Component, useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
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
		<div className="pt-5 mt-5">
			<div className="row d-flex justify-content-center p-1 m-1 ">
				<div className="col-xl-6 col-lg-8 col-md 10 col-sm-12 bg-secondary m-1 border-5 rounded-pill shadow">
					<div className="row m-1">
						<h1 className="h1 col-12  d-flex justify-content-center">INGRESO</h1>
						<p className="col-12  d-flex justify-content-center float-end align-items-center">
							¿No te has registrado?
							<Link to="/register">&nbsp;Registrarme</Link>
						</p>
					</div>
				</div>
			</div>
			<div className="row d-flex justify-content-center p-1 m-1 ">
				<div className="col-xl-6 col-lg-8 col-md 10 col-sm-12 bg-secondary m-1 border-5 rounded-pill shadow">
					<div className="row m-1">
						<p className="h5 col-12  d-flex justify-content-center">CORREO ELECTRÓNICO</p>
						<div className="col-12  d-flex justify-content-center float-end align-items-center mb-1">
							<input
								onChange={e => setEmail(e.target.value)}
								type="email"
								className="form-control rounded-pill"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="ejemplo@correo.com"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="row d-flex justify-content-center p-1 m-1 ">
				<div className="col-xl-6 col-lg-8 col-md 10 col-sm-12 bg-secondary m-1 border-5 rounded-pill shadow">
					<div className="row m-1">
						<p className="h5 col-12  d-flex justify-content-center">CORREO ELECTRÓNICO</p>
						<div className="col-12  d-flex justify-content-center float-end align-items-center mb-1">
							<input
								onChange={e => setEmail(e.target.value)}
								type="email"
								className="form-control rounded-pill"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="ejemplo@correo.com"
							/>
						</div>
					</div>
				</div>
			</div>

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
