import React, { useRef } from 'react';
import { useOnClickOutside } from "usehooks-ts";
import classname from "classnames";
import "./Modal.scss";

const Modal = ({ children, open, onClose, disableClickOutside }) => {
	const ref = useRef(null);

	useOnClickOutside(ref, () => {
		if (!disableClickOutside) {
			onClose();
		}
	});

	const modalClass = classname({
		"modal modal-bottom sm:modal-middle": true,
		"modal-open": open,
	});

	return (
		open && <div className={modalClass}>
			<div className="modal-box" ref={ref}>
				<div className="modal-action absolute right-5 top-5 m-0">
					<button className="btn" onClick={onClose}>X</button>
				</div>

				{children}

			</div>
		</div>
	);
};

export { Modal }