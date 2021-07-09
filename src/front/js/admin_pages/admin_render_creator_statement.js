import React, { useState, useContext, useEffect } from "react";
import { Button, Input, Badge } from "reactstrap";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
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
					<div key={index} className="row p-1 pt-0 border rounded-1 shadow mt-1">
						{statementToRender[index]}
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
			} else if (element === "m2") {
				let aux_inputs = [];

				statement[index].map(function(table_element, row_index) {
					let table_aux = "";
					if (row_index === 0) {
						table_aux = (
							<div key={row_index} className="row container-fluid m-1 mt-0 d-flex justify-content-center">
								<div className="col-6">
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
								<div className="col-6">
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
							</div>
						);
					} else if (row_index > 0) {
						table_aux = (
							<div key={row_index} className="row container-fluid m-1 mt-0 d-flex justify-content-center">
								<div className="col-6">
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
								<div className="col-6">
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

	return <div>{convertedComponent} Hello</div>;
}

RenderCreatorStatement.propTypes = {
	statementToRender: PropTypes.array,
	statementTypesToRender: PropTypes.array
};