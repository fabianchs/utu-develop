import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="mt-5">
			<div className="row mt-5 bg-dark rounded">
				<div className="col-6 d-flex justify-content-center">
					<div className="m-2 d-flex justify-content-center">
						<div className="container-fluid">
							<h1 id="letters2" className="m-2 text-light text-center">
								&#128513; ¡UTÚ! De un estudiante para futuros estudiantes.
							</h1>
						</div>
						<div className="container-fluid">
							<Link to="/register" className="text-light">
								<Button color="success" className="m-2 rounded-pill">
									¡Registrarme!
								</Button>
							</Link>
						</div>
					</div>
				</div>
				<div className="col-6">
					<div className="m-2">
						<h1 className="text-light"> Probando</h1>
					</div>
				</div>
			</div>
			{/* <div className="row d-flex justify-content-center mt-5">
				<div className="row mb-3 d-flex align-items-center  ">
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
						<h1 id="letters" className="m-2 text-light">
							&#128513; ¡UTÚ! De un estudiante para futuros estudiantes.
						</h1>
						<Link to="/register" className="text-light">
							<Button color="success" className="m-2 rounded-pill">
								¡Registrarme!
							</Button>
						</Link>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 " />

                    </div>
				</div>
			</div> */}
			<div className="row d-flex justify-content-center m-5">
				<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
					{" "}
					<div className="card m-1 shadow">
						<h5 className="card-title m-1">Aprendizaje</h5>
						<img
							src="https://s1.1zoom.me/prev/579/Abstraction_Vector_Graphics_Texture_578280_600x400.jpg"
							className="card-img-top pt-1"
							alt="..."
						/>
						<div className="card-body">
							<p className="card-text">
								Utú es un banco de preguntas para las pruebas de aptitud académica de las universidades
								públicas de Costa Rica. &#127919;
							</p>
						</div>
					</div>
				</div>
				<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
					<div className="card m-1 shadow">
						<h5 className="card-title m-1">Práctica</h5>
						<img
							src="https://s1.1zoom.me/prev/579/Abstraction_Vector_Graphics_Texture_578280_600x400.jpg"
							className="card-img-top pt-1"
							alt="..."
						/>
						<div className="card-body">
							<p className="card-text">
								Utú es una plataforma gratuita, creada con el fin de ofrecer a los costarricenses un
								medio de práctica para las pruebas. &#11088;
							</p>
						</div>
					</div>
				</div>
				<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
					<div className="card m-1 shadow">
						<h5 className="card-title m-1">Mejora</h5>
						<img
							src="https://s1.1zoom.me/prev/579/Abstraction_Vector_Graphics_Texture_578280_600x400.jpg"
							className="card-img-top pt-1"
							alt="..."
						/>
						<div className="card-body">
							<p className="card-text">
								Utú está trabajando para ofrecer a futuro las explicaciones de los enunciados dentro de
								la plataforma. &#128151;
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
