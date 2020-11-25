import React, { useState } from 'react'
import ReactDom from "react-dom";

import "./style.scss";
export default function Modal({ children, open, onClose, ownClass }) {

    if (!open) {
        return null
    }

    return ReactDom.createPortal(
        <div className={`modal-overlay ${ownClass}`}>
            <div className="modal-section-main">
                <button className="close-button" onClick={() => onClose()}> Close </button>
                {children}
            </div>
        </div>,
        document.getElementById("modal-root")
    )
}
