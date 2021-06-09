import React, { Component, useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import MathJax from "react-mathjax";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from "react-html-parser";
export const Practice = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [auth, setAuth] = useState(false);
	const { store, actions } = useContext(Context);
	const statement = [
		"Hola!",
		"(a^2+3)/56",
		"prueba",
		"https://i.pinimg.com/originals/d2/4b/be/d24bbe79387549086d159aa4462bf4c9.png",
		"\\dfrac{a^2+3}{56}",
		"x^2-56"
	];
	const types = ["t", "f", "t", "i", "f", "f"];

	const inlineFormula = `k_{n + 1} = n^2 + k_n^2 - k_{n - 1}`;
	const blockFormula = `\\int_0^\\infty x^2 dx`;
	let final = [];

	types.map(function(element, index) {
		let temporal = "";
		if (element === "t") {
			temporal = (
				<p>
					&nbsp;
					{statement[index]}
					&nbsp;
				</p>
			);
			final.push(temporal);
		} else if (element === "f") {
			temporal = (
				<MathJax.Provider>
					<div>
						<p>
							<MathJax.Node inline formula={statement[index]} />
						</p>
					</div>
				</MathJax.Provider>
			);
			final.push(temporal);
		} else if (element === "i") {
			temporal = <img src={statement[index]} />;
			final.push(temporal);
		}
		console.log(statement[index]);
	});

	return (
		// <div className="mx-auto pt-5">
		<div className="mx-auto pt-5 m-5">
			<div className="row mt-5">{final}</div>
		</div>
	);
};
