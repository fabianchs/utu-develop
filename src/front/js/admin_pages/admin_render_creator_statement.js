import React, { useState, useContext, useEffect } from "react";
import { Button, Input, Badge, Table } from "reactstrap";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import MathJax from "react-mathjax";
import "../../styles/index.scss";
export function RenderCreatorStatement(props) {
	const { statementToRender, statementTypesToRender } = props;
	const [convertedComponent, setConvertedComponent] = useState("");
	console.log(statementToRender, statementTypesToRender);

	function refreshCreator() {
		let auxCreator = [];
		statementTypesToRender.map(function(element, index) {
			let aux = "";
			if (element === "t") {
				aux = (
					<span className="m-0 p-0" key={index}>
						{statementToRender[index]}
						&nbsp;
					</span>
				);
				auxCreator.push(aux);
			} else if (element === "f") {
				aux = (
					<MathJax.Provider key={index}>
						<span>
							<MathJax.Node inline formula={statementToRender[index]} />
						</span>
						<span>&nbsp;</span>
					</MathJax.Provider>
				);
				auxCreator.push(aux);
			} else if (element === "s") {
				aux = <br />;

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
				const list_inputs = statementToRender[index].map((list_element, list_index) => (
					<li key={list_index}>{statementToRender[index][list_index]}</li>
				));

				aux = <ul key={index}>{list_inputs}</ul>;

				auxCreator.push(aux);
			} else if (element === "m2") {
				let aux_inputs = [];

				statementToRender[index].map(function(table_element, row_index) {
					let table_aux = "";
					if (row_index === 0) {
						table_aux = (
							<thead key={row_index}>
								<tr>
									<th>{statementToRender[index][row_index][0]}</th>
									<th>{statementToRender[index][row_index][1]}</th>
								</tr>
							</thead>
						);
					} else if (row_index > 0) {
						table_aux = (
							<tr>
								<td>{statementToRender[index][row_index][0]}</td>
								<td>{statementToRender[index][row_index][1]}</td>
							</tr>
						);
					}

					aux_inputs.push(table_aux);
				});

				aux = <Table key={index}>{aux_inputs}</Table>;
				auxCreator.push(aux);
			} else if (element === "m3") {
				let aux_inputs = [];

				statement[index].map(function(table_element, row_index) {
					let table_aux = "";
					if (row_index === 0) {
						table_aux = (
							<div key={row_index} className="row container-fluid m-1 mt-0 d-flex justify-content-center">
								<div className="col-4">
									<Input
										type="text"
										name="text"
										id="exampleText"
										placeholder="Título de la columna"
										className="m-1 border-dark"
										onBlur={() => {
											editTableElement(event, index, row_index, 0);
										}}
									/>
								</div>
								<div className="col-4">
									<Input
										type="text"
										name="text"
										id="exampleText"
										placeholder="Título de la columna"
										className="m-1 border-dark"
										onBlur={() => {
											editTableElement(event, index, row_index, 1);
										}}
									/>
								</div>
								<div className="col-4">
									<Input
										type="text"
										name="text"
										id="exampleText"
										placeholder="Título de la columna"
										className="m-1 border-dark"
										onBlur={() => {
											editTableElement(event, index, row_index, 2);
										}}
									/>
								</div>
							</div>
						);
					} else if (row_index > 0) {
						table_aux = (
							<div key={row_index} className="row container-fluid m-1 mt-0 d-flex justify-content-center">
								<div className="col-4">
									<Input
										type="text"
										name="text"
										id="exampleText"
										className="m-1"
										onBlur={() => {
											editTableElement(event, index, row_index, 0);
										}}
									/>
								</div>
								<div className="col-4">
									<Input
										type="text"
										name="text"
										id="exampleText"
										className="m-1"
										onBlur={() => {
											editTableElement(event, index, row_index, 1);
										}}
									/>
								</div>
								<div className="col-4">
									<Input
										type="text"
										name="text"
										id="exampleText"
										className="m-1"
										onBlur={() => {
											editTableElement(event, index, row_index, 2);
										}}
									/>
								</div>
							</div>
						);
					}

					aux_inputs.push(table_aux);
				});

				aux = (
					<div key={index} className="row p-1 pt-0 border rounded-1 shadow mt-3">
						<div className="col-12 m-0 p-0 d-flex justify-content-between">
							<div className="m-0 p-0">
								<Badge color="secondary"> Tabla</Badge>
								<small className="text-muted">
									&nbsp; En las tablas solo es posible agregar texto, no expresiones matemáticas.
								</small>
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

						{aux_inputs}

						<div className="col-12 d-flex justify-content-end">
							<Button
								color="secondary"
								size="sm"
								className="p-0"
								onClick={() => {
									addOrDeleteTableInput(index, element, true);
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
									addOrDeleteTableInput(index, element, false);
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
			} else if (element === "m4") {
				let aux_inputs = [];

				statement[index].map(function(table_element, row_index) {
					let table_aux = "";
					if (row_index === 0) {
						table_aux = (
							<div key={row_index} className="row container-fluid m-1 mt-0 d-flex justify-content-center">
								<div className="col-3">
									<Input
										type="text"
										name="text"
										id="exampleText"
										placeholder="Título de la columna"
										className="m-1 border-dark"
										onBlur={() => {
											editTableElement(event, index, row_index, 0);
										}}
									/>
								</div>
								<div className="col-3">
									<Input
										type="text"
										name="text"
										id="exampleText"
										placeholder="Título de la columna"
										className="m-1 border-dark"
										onBlur={() => {
											editTableElement(event, index, row_index, 1);
										}}
									/>
								</div>
								<div className="col-3">
									<Input
										type="text"
										name="text"
										id="exampleText"
										placeholder="Título de la columna"
										className="m-1 border-dark"
										onBlur={() => {
											editTableElement(event, index, row_index, 2);
										}}
									/>
								</div>
								<div className="col-3">
									<Input
										type="text"
										name="text"
										id="exampleText"
										placeholder="Título de la columna"
										className="m-1 border-dark"
										onBlur={() => {
											editTableElement(event, index, row_index, 3);
										}}
									/>
								</div>
							</div>
						);
					} else if (row_index > 0) {
						table_aux = (
							<div key={row_index} className="row container-fluid m-1 mt-0 d-flex justify-content-center">
								<div className="col-3">
									<Input
										type="text"
										name="text"
										id="exampleText"
										className="m-1"
										onBlur={() => {
											editTableElement(event, index, row_index, 0);
										}}
									/>
								</div>
								<div className="col-3">
									<Input
										type="text"
										name="text"
										id="exampleText"
										className="m-1"
										onBlur={() => {
											editTableElement(event, index, row_index, 1);
										}}
									/>
								</div>
								<div className="col-3">
									<Input
										type="text"
										name="text"
										id="exampleText"
										className="m-1"
										onBlur={() => {
											editTableElement(event, index, row_index, 2);
										}}
									/>
								</div>
								<div className="col-3">
									<Input
										type="text"
										name="text"
										id="exampleText"
										className="m-1"
										onBlur={() => {
											editTableElement(event, index, row_index, 3);
										}}
									/>
								</div>
							</div>
						);
					}

					aux_inputs.push(table_aux);
				});

				aux = (
					<div key={index} className="row p-1 pt-0 border rounded-1 shadow mt-3">
						<div className="col-12 m-0 p-0 d-flex justify-content-between">
							<div className="m-0 p-0">
								<Badge color="secondary"> Tabla</Badge>
								<small className="text-muted">
									&nbsp; En las tablas solo es posible agregar texto, no expresiones matemáticas.
								</small>
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

						{aux_inputs}

						<div className="col-12 d-flex justify-content-end">
							<Button
								color="secondary"
								size="sm"
								className="p-0"
								onClick={() => {
									addOrDeleteTableInput(index, element, true);
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
									addOrDeleteTableInput(index, element, false);
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
			return auxCreator;
		});
		setConvertedComponent(auxCreator);
	}
	useEffect(() => {
		refreshCreator();
	}, []);

	return <div>{convertedComponent}</div>;
}

RenderCreatorStatement.propTypes = {
	statementToRender: PropTypes.array,
	statementTypesToRender: PropTypes.array
};
