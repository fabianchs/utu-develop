import React, { Component, useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import MathJax from "react-mathjax";

export const Practice = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [auth, setAuth] = useState(false);
	const { store, actions } = useContext(Context);

	const inlineFormula = `k_{n + 1} = n^2 + k_n^2 - k_{n - 1}`;
	const blockFormula = `\\int_0^\\infty x^2 dx`;
	const enunciado = `<p>
        Hola esta es una de las pruebas <MathJax.Node formula="a^2" />{" "}
    </p>`;
	return (
		// <div className="mx-auto pt-5">
		<div className="mx-auto pt-5 m-5">
			<div className="row mt-5">
				<MathJax.Provider>
					<div>
						<p>
							Inline formula: <MathJax.Node inline formula={inlineFormula} />
						</p>
						<hr />
						<p>Block formula:</p>
						<MathJax.Node formula={blockFormula} />
					</div>
					<div>{enunciado.toString()}</div>
				</MathJax.Provider>
			</div>
		</div>
	);
};
