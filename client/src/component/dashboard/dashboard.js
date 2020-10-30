import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./style.scss";


function Dashboard(props) {
    const [isOpen, setisOpen] = useState(false);


    const { name, email, phoneNumber } = props;
    return (
        <div className="dashboard-section">
            <div className="text">
                hello: {name}
            </div>
            <div>
                email: {email}
            </div>
            <div>
                phone: {phoneNumber}
            </div>

            <button onClick={() => setisOpen(true)}>
                Modal Open
            </button>

            <div>
                <Modal
                    open={isOpen}
                    onClose={() => setisOpen(false)}
                >
                    FROM MODAL CLASS
                </Modal>
            </div>
        </div>
    );
}
export default Dashboard;
