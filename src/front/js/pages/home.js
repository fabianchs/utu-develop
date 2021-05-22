import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center m-5">
			<div className="row d-flex justify-content-center m-2 mt-5 ">
				<div className="row d-flex justify-content-center">
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
									Utú es un banco de preguntas para las pruebas de aptitud académica de las
									universidades públicas de Costa Rica. &#127919;
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
									Utú está trabajando para ofrecer a futuro las explicaciones de los enunciados dentro
									de la plataforma. &#128151;
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
