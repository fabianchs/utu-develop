import React, { Component, useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Badge, Button } from "reactstrap";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.scss";

export const Register = () => {
	const [name, setName] = useState("");
	const [last_name, setLast_name] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confPassword, setConfPassword] = useState("");
	const [auth, setAuth] = useState(false);
	const { store, actions } = useContext(Context);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const showValidation = (tag, show) => {
		if (!show) {
			tag.classList.remove("is-valid");
			tag.classList.add("is-invalid");
		} else {
			tag.classList.remove("is-invalid");
			tag.classList.add("is-valid");
		}
	};

	const validateTextInput = e => {
		//Expresion regular para la validacion
		const nameregex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g; // Solo letras

		const tag = e.target;

		showValidation(tag, nameregex.test(tag.value));
	};

	const validateEmailInput = e => {
		//Expresion regular para la validacion de email
		const emailregex = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

		const tag = e.target;

		showValidation(tag, emailregex.test(tag.value));
	};
	const validatePassword = e => {
		var passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
		const tag = e.target;
		showValidation(tag, passRegex.test(tag.value));
	};

	const samePassword = e => {
		const tag = e.target;
		if (password != tag.value) {
			showValidation(tag, false);
		} else {
			showValidation(tag, true);
		}
	};

	const handleSubmit = e => {
		e.preventDefault();
		const body = {
			name: name,
			last_name: last_name,
			email: email,
			password: password
		};

		let inputs = e.target.getElementsByTagName("input");
		console.log("estos inputs", inputs);
		let formValid = true;

		Array.prototype.filter.call(inputs, function(input) {
			formValid = input.classList.contains("is-valid") ? true : false;
			if (!formValid) {
				showValidation(input, false);
			}
		});
		console.log(body);
		if (formValid) {
			let url = store.api_url + "/user/register";
			console.log("valid");
			fetch(url, {
				method: "POST",
				body: JSON.stringify(body),
				headers: {
					"Content-Type": "application/json"
				}
			})
				.then(res => {
					if (res.status === 201) {
						alert("Cuenta registrada exitosamente");

						// Se logró registrar correctamente, se llama inmediatamente a que se loguee de una vez

						return res.json();
					} else {
						alert("Ha ocurrido un error");
					}
				})
				.then(data => {
					console.log(data);
					setAuth(true);
				})
				.catch(err => console.log(err));
		}
	};

	return (
		// <div className="mx-auto pt-5">
		<div className="pt-5 m-5">
			<div className="container-fluid mt-3">
				<div className="row d-flex justify-content-center">
					<Badge className="col-xl-6 col-lg-8 col-md 10 col-sm-12 rounded-top rounded-5 shadow" color="dark">
						<p className="h1 m-0">REGISTRO</p>
					</Badge>
				</div>
			</div>
			<div className="container-fluid mt-3">
				<div className="row d-flex justify-content-center">
					<Badge className="col-xl-6 col-lg-8 col-md 10 col-sm-12 rounded-top rounded-5 shadow" color="dark">
						<p className="h6 m-0">Nombre</p>
					</Badge>
				</div>
				<div className="row d-flex justify-content-center">
					<div className="col-xl-6 col-lg-8 col-md 10 col-sm-12 bg-secondary border-5  shadow">
						<div className="row">
							<div className="col-12  d-flex justify-content-center float-end align-items-center m-1">
								<input
									onChange={e => setName(e.target.value)}
									onBlur={validateTextInput}
									type="text"
									className="form-control"
									id="inputName"
									placeholder="Tu nombre"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid mt-3">
				<div className="row d-flex justify-content-center">
					<Badge className="col-xl-6 col-lg-8 col-md 10 col-sm-12 rounded-top rounded-5 shadow" color="dark">
						<p className="h6 m-0">Apellido</p>
					</Badge>
				</div>
				<div className="row d-flex justify-content-center">
					<div className="col-xl-6 col-lg-8 col-md 10 col-sm-12 bg-secondary border-5  shadow">
						<div className="row">
							<div className="col-12  d-flex justify-content-center float-end align-items-center m-1">
								<input
									onChange={e => setLast_name(e.target.value)}
									type="text"
									className="form-control"
									id="inputLast_Name"
									onBlur={validateTextInput}
									placeholder="Tu apellido"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid mt-3">
				<div className="row d-flex justify-content-center">
					<Badge className="col-xl-6 col-lg-8 col-md 10 col-sm-12 rounded-top rounded-5 shadow" color="dark">
						<p className="h6 m-0">Correo electrónico</p>
					</Badge>
				</div>
				<div className="row d-flex justify-content-center">
					<div className="col-xl-6 col-lg-8 col-md 10 col-sm-12 bg-secondary border-5  shadow">
						<div className="row">
							<div className="col-12  d-flex justify-content-center float-end align-items-center m-1">
								<input
									onChange={e => setEmail(e.target.value)}
									type="email"
									className="form-control rounded m-1"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="ejemplo@correo.com"
									onBlur={validateEmailInput}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid mt-3">
				<div className="row d-flex justify-content-center">
					<Badge className="col-xl-6 col-lg-8 col-md 10 col-sm-12 rounded-top rounded-5 shadow" color="dark">
						<p className="h6 m-0">Contraseña</p>
					</Badge>
				</div>
				<div className="row d-flex justify-content-center">
					<div className="col-xl-6 col-lg-8 col-md 10 col-sm-12 bg-secondary border-5  shadow">
						<div className="row">
							<div className="col-12  d-flex justify-content-center float-end align-items-center m-1">
								<input
									type="password"
									onChange={e => setPassword(e.target.value)}
									onBlur={validatePassword}
									className="form-control"
									id="inputPassword1"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid mt-3">
				<div className="row d-flex justify-content-center">
					<Badge className="col-xl-6 col-lg-8 col-md 10 col-sm-12 rounded-top rounded-5 shadow" color="dark">
						<p className="h6 m-0">Confirmar contraseña</p>
					</Badge>
				</div>
				<div className="row d-flex justify-content-center">
					<div className="col-xl-6 col-lg-8 col-md 10 col-sm-12 bg-secondary border-5  shadow">
						<div className="row">
							<div className="col-12  d-flex justify-content-center float-end align-items-center m-1">
								<input
									type="password"
									onChange={(e => setLast_name(e.target.value), samePassword)}
									className="form-control"
									id="inputPassword2"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid mt-3">
				<div className="row d-flex justify-content-center">
					<Button
						onClick={handleSubmit}
						color="success"
						className="col-xl-6 col-lg-8 col-md-10 col-sm-12  border border-5 shadow bg-success">
						<p className="h3 text-light">Registrarme</p>
					</Button>
				</div>
			</div>
			<div className="container-fluid mt-3">
				<div className="row d-flex justify-content-center">
					<div className="col-xl-6 col-lg-8 col-md-10 col-sm-12 rounded-top rounded-5 shadow bg-secondary">
						<small id="passwordHelpBlock" className="form-text text-muted">
							<p>Condiciones para la contraseña</p>
							<ul>
								<li>Mínimo 8 caracteres</li>
								<li>Máximo 15 caracteres</li>
								<li>Al menos una letra mayúscula</li>
								<li>Al menos una letra minúscula</li>
								<li>Al menos un dígito</li>
								<li>No espacios en blanco</li>
							</ul>
						</small>
					</div>
				</div>
			</div>

			{/* 
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-6 offset-md-3">
							<h1 className="m-0">Registrarse</h1>
							<hr className="mx-0 my-1" />
							<small>Ingresa los datos para registrate</small>
							<form id="formRegister" onSubmit={handleSubmit} className="mt-3 needs-validation">
								<div className="form-group">
									<label htmlFor="inputName">Nombre</label>
									<input
										onChange={e => setName(e.target.value)}
										onBlur={validateTextInput}
										type="text"
										className="form-control"
										id="inputName"
									/>
									<div className="invalid-feedback">Ingresa un nombre válido</div>
								</div>

								<div className="form-group">
									<label htmlFor="inputFirstSurname">Primer Apellido</label>
									<input
										onChange={e => setFirst_surname(e.target.value)}
										type="text"
										className="form-control"
										id="inputFirstSurname"
										onBlur={validateTextInput}
									/>
									<div className="invalid-feedback">Ingresa un apellido válido</div>
								</div>

								<div className="form-group">
									<label htmlFor="inputSecondSurname">Segundo Apellido</label>
									<input
										onChange={e => setSecond_surname(e.target.value)}
										type="text"
										className="form-control"
										id="inputSecondSurname"
										onBlur={validateTextInput}
									/>
									<div className="invalid-feedback">Ingresa un apellido válido</div>
								</div>

								<div className="form-group">
									<label htmlFor="inputEmail">Dirección de correo electrónico</label>
									<input
										type="text"
										onChange={e => setEmail(e.target.value)}
										className="form-control"
										id="inputEmail"
										onBlur={validateEmailInput}
									/>
									<div className="invalid-feedback">Correo electrónico invalido</div>
								</div>
								<div className="row">
									<div className="col">
										<div className="form-group">
											<label htmlFor="inputPassword1">Contraseña</label>
											<input
												type="password"
												onChange={e => setPassword(e.target.value)}
												onBlur={validatePassword}
												className="form-control"
												id="inputPassword1"
											/>
											<div className="invalid-feedback">Ingresa una contraseña válida</div>
										</div>
									</div>
									<div className="col">
										<div className="form-group">
											<label htmlFor="inputPassword2">Confirmar Contraseña</label>
											<input
												type="password"
												onChange={(e => setFirst_surname(e.target.value), samePassword)}
												className="form-control"
												id="inputPassword2"
											/>
											<div className="invalid-feedback">La contraseña deben ser iguales</div>
										</div>
									</div>

									<div className="container">
										<div className="row">
											<small id="passwordHelpBlock" className="form-text text-muted">
												<ul>
													<li>Mínimo 8 caracteres</li>
													<li>Máximo 15 caracteres</li>
													<li>Al menos una letra mayúscula</li>
													<li>Al menos una letra minúscula</li>
													<li>Al menos un dígito</li>
													<li>No espacios en blanco</li>
													<li>Al menos 1 caracter especial</li>
												</ul>
											</small>
										</div>
									</div>
								</div>
								<button type="submit" className="btn btn-block btn-info">
									Registrarse
								</button>
							</form>
						</div>
					</div>
				</div> */}
		</div>
	);
};
