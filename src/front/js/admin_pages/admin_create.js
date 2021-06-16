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
	//t=>texto f=>formula s=>separación i=>imagen
	const [options, setOptions] = useState([]);
	const [optionsTypes, setOptionsTypes] = useState([]);
	const [answers, setAnswers] = useState([]); //"t","f","f","f"

	//const statement = ["Hola!", "(a^2+3)/56", "prueba", "\\dfrac{a^2+3}{56}", "x^2-56"];
	//const types = ["t", "f", "t", "f", "f"];

	return (
		// <div className="mx-auto pt-5">
		<div className="container-fluid mt-5 pt-5">
			<div className="row m-2">
				<div className="col-6">
					<div className="row p-1 pt-0 border rounded-1 shadow">
						<div className="col-12 m-0 p-0 d-flex justify-content-between">
							<div>
								<Badge color="secondary">Actual: Texto</Badge>
								<Badge color="dark">Texto</Badge>
								<Badge color="dark">Fórmula</Badge>
								<Badge color="dark">Imagen</Badge>
								<Badge color="dark">Separador</Badge>
							</div>
							<div className="float-end">
								<Badge color="danger">X</Badge>
							</div>
						</div>
						<Input type="textarea" name="text" id="exampleText" />
					</div>
				</div>

				<div className="col-6">sadf</div>
			</div>
		</div>
	);
};
