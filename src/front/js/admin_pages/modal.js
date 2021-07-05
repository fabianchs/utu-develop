import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Badge } from "reactstrap";
import PropTypes from "prop-types";
import "../../styles/index.scss";
export function ModalExample(props) {
	const { buttonLabel } = props;

	const [modal, setModal] = useState(false);
	const [counter, setCounter] = useState(2);
	const toggle = () => setModal(!modal);

	return (
		<div className="mt-5">
			<Button color="secondary" onClick={toggle}>
				{buttonLabel}
			</Button>
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>¿De cuántas columnas será la tabla?</ModalHeader>
				<ModalBody>
					<small>Puedes seleccionar hasta un máximo de 4 columnas.</small>
					<div className="container-fluid d-flex align-items-center justify-content-center m-1" />
					<Button
						color="secondary"
						size="sm"
						className="p-0"
						onClick={() => {
							if (counter > 2) {
								setCounter(counter - 1);
							}
						}}>
						<p className="m-0 p-0">
							&nbsp;
							<i className="fas fa-minus" />
							&nbsp;
						</p>
					</Button>
					&nbsp;
					<Button color="secondary" size="sm" className="p-0" disabled>
						<p className="m-0 p-0">
							&nbsp;
							{counter}
							&nbsp;
						</p>
					</Button>
					&nbsp;
					<Button
						color="secondary"
						size="sm"
						className="p-0"
						onClick={() => {
							if (counter < 4) {
								setCounter(counter + 1);
							}
						}}>
						<p className="m-0 p-0">
							&nbsp;
							<i className="fas fa-plus" />
							&nbsp;
						</p>
					</Button>
				</ModalBody>
				<ModalFooter>
					<Button color="success" className="bg-success border-success" onClick={toggle}>
						Agregar
					</Button>{" "}
					<Button color="danger" onClick={toggle}>
						Cancelar
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}

ModalExample.propTypes = {
	buttonLabel: PropTypes.string
};
