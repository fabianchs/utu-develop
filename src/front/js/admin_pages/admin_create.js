import React, { Component, useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";
import "../../styles/index.scss";
import { Button, Input, Badge } from "reactstrap";

export const AdminCreate = () => {
	const [statement, setStatement] = useState([]);
	const [statementTypes, setStatementTypes] = useState([]);
	//t=>texto f=>formula s=>separación i=>imagen l=>lista m=>matriz
	const [options, setOptions] = useState([]);
	const [optionsTypes, setOptionsTypes] = useState([]);
	const [answers, setAnswers] = useState([]); //"t","f","f","f"

	//const statement = ["Hola!", "(a^2+3)/56", "prueba", "\\dfrac{a^2+3}{56}", "x^2-56"];
	//const types = ["t", "f", "t", "f", "f"];

	let text = (
		<div className="row p-1 pt-0 border rounded-1 shadow mt-1">
			<div className="col-12 m-0 p-0 d-flex justify-content-between">
				<div className="m-0 p-0">
					<Badge color="secondary">Actual: Texto</Badge>
				</div>
				<div className="float-end">
					<Badge color="danger">X</Badge>
				</div>
			</div>
			<Input type="textarea" name="text" id="exampleText" />
		</div>
	);
	let list = (
		<div className="row p-1 pt-0 border rounded-1 shadow mt-3">
			<div className="col-12 m-0 p-0 d-flex justify-content-between">
				<div className="m-0 p-0">
					<Badge color="secondary">Actual: Lista</Badge>
				</div>
				<div className="float-end">
					<Badge color="danger">X</Badge>
				</div>
			</div>
			<Input type="text" name="text" id="exampleText" className="mb-1" />
			<Input type="text" name="text" id="exampleText" className="mb-1" />
			<Input type="text" name="text" id="exampleText" className="mb-1" />
			<div className="col-12 d-flex justify-content-end">
				<Button color="secondary" size="sm" className="p-0">
					<p className="m-0 p-0">
						&nbsp;
						<i className="fas fa-plus" />
						&nbsp;
					</p>
				</Button>
				&nbsp;
				<Button color="secondary" size="sm" className="p-0">
					<p className="m-0 p-0">
						&nbsp;
						<i className="fas fa-minus" />
						&nbsp;
					</p>
				</Button>
			</div>
		</div>
	);

	let formula = (
		<div className="row p-1 pt-0 border rounded-1 shadow mt-3">
			<div className="col-12 m-0 p-0 d-flex justify-content-between">
				<div className="m-0 p-0">
					<Badge color="secondary">Actual: Fórmula</Badge>
				</div>
				<div className="float-end">
					<Badge color="danger">X</Badge>
				</div>
			</div>
			<Input type="text" name="text" id="exampleText" className="mb-1" />
		</div>
	);

	let image = (
		<div className="row p-1 pt-0 border rounded-1 shadow mt-3">
			<div className="col-12 m-0 p-0 d-flex justify-content-between">
				<div className="m-0 p-0">
					<Badge color="secondary">Actual: Imagen</Badge>
				</div>
				<div className="float-end">
					<Badge color="danger">X</Badge>
				</div>
			</div>
			<Input type="file" name="file" id="exampleFile" accept=".jpg,.png,.jpeg,.gif" />
		</div>
	);

	let space = (
		<div className="row p-1 pt-0 border rounded-1 shadow mt-3 bg-secondary">
			<Badge color="secondary" className="col-12 d-flex justify-content-between bg-secondary text-dark">
				SEPARADOR
				<Badge color="danger">X</Badge>
			</Badge>
		</div>
	);

	return (
		// <div className="mx-auto pt-5">
		<div className="container-fluid mt-5 pt-5">
			<div className="container-fluid fixed-top  bg-light" style={{ "margin-top": "59.7px" }}>
				<div className="row pt-1">
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
						<div className="d-flex justify-content-start bg-light">
							<Button size="sm">
								<i className="far fa-file-alt" />
								&nbsp; Texto
							</Button>
							&nbsp;
							<Button size="sm">
								<i className="fas fa-calculator" />
								&nbsp; Fórmula
							</Button>
							&nbsp;
							<Button size="sm">
								<i className="far fa-images" /> &nbsp; Imagen
							</Button>
							&nbsp;
							<Button size="sm">
								<i className="fas fa-ruler-horizontal" />
								&nbsp; Separador
							</Button>
							&nbsp;
							<Button size="sm">
								<i className="fas fa-list" />
								&nbsp; Lista
							</Button>
							&nbsp;
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
						<div className="d-flex justify-content-between bg-light">
							<Button size="sm">
								<i className="fas fa-sync" />
								&nbsp; Actualizar
							</Button>
							&nbsp;
							<div>
								<Button size="sm">
									<i className="far fa-save" />
									&nbsp; Guardar
								</Button>
								&nbsp;
								<Button size="sm">
									<i className="far fa-paper-plane" /> &nbsp; Finalizar
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row m-2 mt-4 ">
				<div className="col-6">
					{text}
					{list}
					{space}
					{formula}
					{image}
				</div>
				<div className="col-6">sadf</div>
			</div>
		</div>
	);
};
