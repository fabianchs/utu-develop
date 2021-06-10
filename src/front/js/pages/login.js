import React, { Component, useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import { Button } from "reactstrap";
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
						<p className="h5 col-12  d-flex justify-content-center">CONTRASEÑA</p>
						<div className="col-12  d-flex justify-content-center float-end align-items-center mb-1">
							<input
								onChange={e => setPassword(e.target.value)}
								type="password"
								className="form-control rounded-pill"
								id="exampleInputPassword1"
								placeholder="Tu contraseña"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="row d-flex justify-content-center m-1">
				<Button
					color="secondary"
					className="col-6 m-2 border border-5 border-dark rounded-pill bg-secondary shadow">
					<p className="h3 text-dark">Ingresar</p>
				</Button>
			</div>
		</div>
	);
};
