import React, { Component, useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import PropTypes, { func } from "prop-types";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";
import "../../styles/index.scss";
import { Button, Input, Badge } from "reactstrap";
import { ModalExample } from "./modal.js";
import MathJax from "react-mathjax";
export const AdminCreate = () => {
	const [statement, setStatement] = useState([]);
	const [statementTypes, setStatementTypes] = useState([]);
	//t=>texto f=>formula s=>space i=>image l=>list m2=>table 2 col m3=>table 3 col m4=>table 4 col
	const [options, setOptions] = useState([]);
	const [optionsTypes, setOptionsTypes] = useState([]);
	const [answers, setAnswers] = useState([]); //"t","f","f","f"
	const [renderedCreator, setRenderedCreator] = useState([]);
	//const statement = ["Hola!", "(a^2+3)/56", "prueba", "\\dfrac{a^2+3}{56}", "x^2-56"];
	//const types = ["t", "f", "t", "f", "f"];

	//<--------------------------[START - FUNCTION THAT CREATE THE EDITOR LABELS]------------------------->

	function refreshCreator() {
		let auxCreator = [];
		statementTypes.map(function(element, index) {
			let aux = "";
			if (element === "t") {
				aux = (
					<div key={index} className="row p-1 pt-0 border rounded-1 shadow mt-1">
						<div className="col-12 m-0 p-0 d-flex justify-content-between">
							<div className="m-0 p-0">
								<Badge color="secondary"> Texto</Badge>
							</div>
							<div className="float-end">
								<Badge
									onClick={() => {
										deleteCreatorElement(index);
									}}
									color="danger">
									X
								</Badge>
							</div>
						</div>
						<Input
							type="textarea"
							name="text"
							id="exampleText"
							onBlur={() => {
								editCreatorElement(event, index);
							}}
						/>
					</div>
				);
				auxCreator.push(aux);
			} else if (element === "f") {
				aux = (
					<div key={index} className="row p-1 pt-0 border rounded-1 shadow mt-3">
						<div className="col-12 m-0 p-0 d-flex justify-content-between">
							<div className="m-0 p-0">
								<Badge color="secondary"> Fórmula</Badge>
							</div>
							<div className="float-end">
								<Badge
									onClick={() => {
										deleteCreatorElement(index);
									}}
									color="danger">
									X
								</Badge>
							</div>
						</div>
						<Input
							type="text"
							name="text"
							id="exampleText"
							className="mb-1"
							onBlur={() => {
								editCreatorElement(event, index);
							}}
						/>
					</div>
				);
				auxCreator.push(aux);
			} else if (element === "s") {
				aux = (
					<div key={index} className="row p-1 pt-0 border rounded-1 shadow mt-3 bg-secondary">
						<Badge
							color="secondary"
							className="col-12 d-flex justify-content-between bg-secondary text-dark">
							SEPARADOR
							<Badge
								onClick={() => {
									deleteCreatorElement(index);
								}}
								color="danger">
								X
							</Badge>
						</Badge>
					</div>
				);

				auxCreator.push(aux);
			} else if (element === "i") {
				aux = (
					<div key={index} className="row p-1 pt-0 border rounded-1 shadow mt-3">
						<div className="col-12 m-0 p-0 d-flex justify-content-between">
							<div className="m-0 p-0">
								<Badge color="secondary"> Imagen</Badge>
							</div>
							<div className="float-end">
								<Badge
									onClick={() => {
										deleteCreatorElement(index);
									}}
									color="danger">
									X
								</Badge>
							</div>
						</div>
						<Input type="file" name="file" id="exampleFile" accept=".jpg,.png,.jpeg,.gif" />
					</div>
				);

				auxCreator.push(aux);
			} else if (element === "l") {
				const list_inputs = statement[index].map((list_element, list_index) => (
					<Input
						key={list_index}
						type="text"
						name="text"
						id="exampleText"
						className="mb-1"
						onBlur={() => {
							editListElement(event, index, list_index);
						}}
					/>
				));

				aux = (
					<div key={index} className="row p-1 pt-0 border rounded-1 shadow mt-3">
						<div className="col-12 m-0 p-0 d-flex justify-content-between">
							<div className="m-0 p-0">
								<Badge color="secondary"> Lista</Badge>
							</div>
							<div className="float-end">
								<Badge
									color="danger"
									onClick={() => {
										deleteCreatorElement(index);
									}}>
									X
								</Badge>
							</div>
						</div>
						{list_inputs}
						<div className="col-12 d-flex justify-content-end">
							<Button
								color="secondary"
								size="sm"
								className="p-0"
								onClick={() => {
									addOrDeleteListInput(index, true);
								}}>
								<p className="m-0 p-0">
									&nbsp;
									<i className="fas fa-plus" />
									&nbsp;
								</p>
							</Button>
							&nbsp;
							<Button
								color="secondary"
								size="sm"
								className="p-0"
								onClick={() => {
									addOrDeleteListInput(index, false);
								}}>
								<p className="m-0 p-0">
									&nbsp;
									<i className="fas fa-minus" />
									&nbsp;
								</p>
							</Button>
						</div>
					</div>
				);

				auxCreator.push(aux);
			}
		});
		setRenderedCreator(auxCreator);
	}
	//<--------------------------[FINISH - FUNCTION THAT CREATES THE EDITOR LABELS]------------------------->

	//<--------------------------[START - FUNCTIONS FOR CREATOR ELEMENTS]---------------------->

	function addToStatement(type) {
		let aux_statement = statement;
		let aux_statement_types = statementTypes;

		if (type === "t" || type === "f" || type === "s" || type === "i") {
			aux_statement.push("");
		} else if (type === "l") {
			aux_statement.push([""]);
		} else if (type === "m2") {
			aux_statement.push([["", ""], ["", ""]]);
		} else if (type === "m3") {
			aux_statement.push([["", "", ""], ["", "", ""]]);
		} else if (type === "m4") {
			aux_statement.push([["", "", "", ""], ["", "", "", ""]]);
		}
		aux_statement_types.push(type);

		setStatement(aux_statement);
		setStatementTypes(aux_statement_types);

		refreshCreator();
	}

	//<--------------------------[=> START LIST EDITOR FUNCTIONS]---------------------->

	function editListElement(e, statement_index, list_index) {
		let aux_statement = statement;

		aux_statement[statement_index][list_index] = e.target.value;

		setStatement(aux_statement);

		refreshCreator();
	}

	function addOrDeleteListInput(statement_index, addInput) {
		let aux_statement = statement;

		let min_list_input_validation = aux_statement[statement_index].length;

		if (addInput) {
			aux_statement[statement_index].push("");
		} else {
			if (min_list_input_validation > 1) {
				aux_statement[statement_index].pop();
			}
		}

		setStatement(aux_statement);

		refreshCreator();
	}
	//<--------------------------[=> FINISH LIST EDITOR FUNCTIONS]---------------------->

	//<--------------------------[CREATOR EDITOR FUNCTIONS]---------------------->

	function deleteCreatorElement(index) {
		let aux_statement = statement;
		let aux_statement_types = statementTypes;

		aux_statement.splice(index, 1);
		aux_statement_types.splice(index, 1);

		setStatement(aux_statement);
		setStatementTypes(aux_statement_types);

		refreshCreator();
	}

	function editCreatorElement(e, index) {
		let aux_statement = statement;
		aux_statement[index] = e.target.value;

		setStatement(aux_statement);
	}

	//<----------------------------------[FINISH - FUNCTION FOR CREATOR ELEMENTS]---------------------------------->
	let text = (
		<div className="row p-1 pt-0 border rounded-1 shadow mt-1">
			<div className="col-12 m-0 p-0 d-flex justify-content-between">
				<div className="m-0 p-0">
					<Badge color="secondary"> Texto</Badge>
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
					<Badge color="secondary"> Lista</Badge>
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
					<Badge color="secondary"> Fórmula</Badge>
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
					<Badge color="secondary"> Imagen</Badge>
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

	let matrix = (
		<div className="row p-1 pt-0 border rounded-1 shadow mt-3">
			<div className="col-12 m-0 p-0 d-flex justify-content-between">
				<div className="m-0 p-0">
					<Badge color="secondary"> Tabla</Badge>
					<small className="text-muted">
						&nbsp; En las tablas solo es posible agregar texto, no expresiones matemáticas.
					</small>
				</div>
				<div className="float-end">
					<Badge color="danger">X</Badge>
				</div>
			</div>
			<div className="row m-1 mt-0">
				<div className="col-3">
					<Input
						type="text"
						name="text"
						id="exampleText"
						placeholder="Título de la columna"
						className="m-1 border-dark"
					/>
				</div>
				<div className="col-3">
					<Input
						type="text"
						name="text"
						id="exampleText"
						placeholder="Título de la columna"
						className="m-1 border-dark"
					/>
				</div>
				<div className="col-3">
					<Input
						type="text"
						name="text"
						id="exampleText"
						placeholder="Título de la columna"
						className="m-1 border-dark"
					/>
				</div>
				<div className="col-3">
					<Input
						type="text"
						name="text"
						id="exampleText"
						placeholder="Título de la columna"
						className="m-1 border-dark"
					/>
				</div>
			</div>
			<div className="row m-1 mt-0">
				<div className="col-3">
					<Input type="text" name="text" id="exampleText" className="m-1" />
				</div>
				<div className="col-3">
					<Input type="text" name="text" id="exampleText" className="m-1" />
				</div>
				<div className="col-3">
					<Input type="text" name="text" id="exampleText" className="m-1" />
				</div>
				<div className="col-3">
					<Input type="text" name="text" id="exampleText" className="m-1" />
				</div>
			</div>
			<div className="row m-1 mt-0">
				<div className="col-3">
					<Input type="text" name="text" id="exampleText" className="m-1" />
				</div>
				<div className="col-3">
					<Input type="text" name="text" id="exampleText" className="m-1" />
				</div>
				<div className="col-3">
					<Input type="text" name="text" id="exampleText" className="m-1" />
				</div>
				<div className="col-3">
					<Input type="text" name="text" id="exampleText" className="m-1" />
				</div>
			</div>
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

	return (
		<div className="container-fluid mt-5 pt-5">
			<div className="container-fluid fixed-top  bg-light" style={{ "margin-top": "59.7px" }}>
				<div className="row pt-1">
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
						<div className="d-flex justify-content-start bg-light">
							<Button size="sm" onClick={() => addToStatement("t")}>
								<i className="far fa-file-alt" />
								&nbsp; Texto
							</Button>
							&nbsp;
							<Button size="sm" onClick={() => addToStatement("f")}>
								<i className="fas fa-calculator" />
								&nbsp; Fórmula
							</Button>
							&nbsp;
							<Button size="sm" onClick={() => addToStatement("i")}>
								<i className="far fa-images" /> &nbsp; Imagen
							</Button>
							&nbsp;
							<Button size="sm" onClick={() => addToStatement("s")}>
								<i className="fas fa-ruler-horizontal" />
								&nbsp; Separador
							</Button>
							&nbsp;
							<Button size="sm" onClick={() => addToStatement("l")}>
								<i className="fas fa-list" />
								&nbsp; Lista
							</Button>
							&nbsp;
							<ModalExample />
							&nbsp;
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
						<div className="d-flex justify-content-between bg-light ms-1">
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
				<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
					{matrix}
					{renderedCreator}
				</div>
				<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 container-fluid">
					<div className="bg-secondary container-fluid rounded shadow">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu sagittis urna. Ut dolor
							nibh, molestie non vestibulum a, volutpat non mi. Praesent eget elit est. Morbi ultrices et
							nibh nec consectetur. Ut viverra elementum eros eu volutpat. Aliquam at elit sodales sapien
							tincidunt commodo et a velit. In hac habitasse platea dictumst. Sed sit amet tincidunt
							metus, blandit commodo risus. Integer in mattis nibh. Curabitur efficitur, eros vel pulvinar
							cursus, neque felis porta libero, ac imperdiet tellus mauris sed eros. Vivamus tincidunt
							condimentum mattis. Nam ultricies lectus nibh, id iaculis nibh faucibus in. Suspendisse sit
							amet mauris varius, egestas nisl vitae, congue velit. Pellentesque scelerisque, lectus vel
							egestas vulputate, tellus velit posuere est, et vehicula neque lacus in ante. Curabitur
							vestibulum vel neque vel laoreet. Vestibulum commodo leo est, non fermentum libero congue
							quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac bibendum metus,
							sodales iaculis felis. Pellentesque et diam at libero aliquam dictum at vitae quam. Donec
							dictum facilisis metus, a laoreet ex rhoncus eu. Vivamus vehicula velit facilisis nunc
							luctus pellentesque. Proin volutpat interdum libero id efficitur. Phasellus lacus est,
							facilisis sed placerat ut, congue sit amet nisl. Duis dui dui, finibus non iaculis sit amet,
							sodales id ex. Donec lectus ante, cursus id mattis a, tincidunt sit amet turpis. Suspendisse
							sit amet dolor nulla. Sed non lectus nisl. Maecenas efficitur congue felis id finibus.
							Integer pellentesque metus ut massa porta fermentum. Integer consectetur ullamcorper
							scelerisque. Vestibulum et urna maximus, lacinia massa id, convallis urna. Aliquam ac luctus
							erat. Integer malesuada accumsan lacus sed facilisis. Curabitur imperdiet felis ac congue
							efficitur. Nam ultricies accumsan ante quis sodales. Vivamus neque lectus, tincidunt vitae
							massa varius, auctor fermentum ex. Class aptent taciti sociosqu ad litora torquent per
							conubia nostra, per inceptos himenaeos. Mauris eget lobortis odio. Aliquam tempus ligula sit
							amet elit malesuada, ut gravida ex cursus. Quisque vestibulum cursus erat nec eleifend. Sed
							laoreet fermentum sapien nec ornare. Mauris molestie ipsum iaculis diam vehicula vestibulum.
							Nullam pellentesque maximus leo, quis aliquam tellus gravida et. Nam quis enim ultricies,
							interdum leo eget, suscipit metus. Sed ut tellus diam. Integer non est risus. Sed elit
							lacus, eleifend eu mi sit amet, consectetur ornare est. Cras bibendum efficitur metus vitae
							vulputate. Nulla interdum viverra sapien. Phasellus et vehicula dolor, at commodo arcu.
							Aliquam vitae sodales risus. Donec tincidunt tellus ut lobortis rhoncus. Proin rhoncus
							libero nec augue scelerisque ultrices. Vivamus tempor, libero at dapibus sollicitudin, metus
							nunc euismod elit, quis porta lacus enim consequat erat. Integer erat velit, tempus at
							finibus tempor, faucibus id sem.{" "}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
