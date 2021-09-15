import React, { Component, useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/index.scss";
import PropTypes from "prop-types";
export function ParseToApiStructure(props) {
	//alt+532
	//.split() to separate
	const { statement_api, statementTypes_api, options_api, optionsTypes_api, answers_api, statement_info_api } = props;

	let converted_statement = [];
	let message = "Enviando";

	for (let index = 0; index < statementTypes_api.length; index++) {
		if (
			statementTypes_api[index] === "m2" ||
			statementTypes_api[index] === "m3" ||
			statementTypes_api[index] === "m4"
		) {
			let first_join = [""];

			first_join = statement_api[index].map((element, position) => {
				return element.join("¶");
			});

			converted_statement.push(first_join.join("¶"));
		} else if (statementTypes_api[index] === "l") {
			if (statement_api[index].length === 1) {
				converted_statement.push(statement_api[index][0]);
			} else {
				converted_statement.push(statement_api[index].join("¶"));
			}
		} else {
			converted_statement.push(statement_api[index]);
		}
	}

	let body = {
		title: statement_info_api[0],
		statement: converted_statement,
		options: options_api,
		statement_types: statementTypes_api,
		options_types: optionsTypes_api,
		answer: answers_api,
		source: statement_info_api[3],
		area: statement_info_api[2],
		institution: statement_info_api[1],
		is_difficult: false,
		is_active: false,
		is_explained: false,
		created_by: "fabito",
		modified_by: "leyo"
	};

	console.log(body);

	message = "Guardado";
	return <div>{message}</div>;
}
ParseToApiStructure.propTypes = {
	statement_api: PropTypes.array,
	statementTypes_api: PropTypes.array,
	options_api: PropTypes.array,
	optionsTypes_api: PropTypes.array,
	answers_api: PropTypes.array,
	statement_info_api: PropTypes.array
};
