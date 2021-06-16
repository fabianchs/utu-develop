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
		<div className="pt-5 mt-5">
			<p>Hola</p>
			<div className="row">
				<div className="col-6">
					<div className="row m-2">
						<div className="row m-0">
							<Badge color="dark">Texto</Badge>
							<Badge color="danger">X</Badge>
						</div>

						<Input type="textarea" name="text" id="exampleText" />
					</div>
				</div>

				<div className="col-6">sadf</div>
			</div>
		</div>
	);
};
