import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<div className="row d-flex justify-content-center m-5">
				<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 bg-secondary">
					<h1 className="text-light">¡Hola!</h1>
					<h1 className="text-light">¿Qué es UTÚ?</h1>
				</div>
			</div>
		</div>
	);
};
