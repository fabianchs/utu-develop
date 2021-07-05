import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import PropTypes from "prop-types";

export function ModalExample(props) {
	const { buttonLabel } = props;

	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<div className="mt-5">
			<Button color="danger" onClick={toggle}>
				{buttonLabel}
			</Button>
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>¿De cuántas columnas será la tabla?</ModalHeader>
				<ModalBody>
					<small>Puedes seleccionar hasta un máximo de 4 columnas.</small>
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={toggle}>
						Agregar
					</Button>{" "}
					<Button color="secondary" onClick={toggle}>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}

ModalExample.propTypes = {
	buttonLabel: PropTypes.string
};
