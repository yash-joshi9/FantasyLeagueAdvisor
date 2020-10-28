import React from "react";
import "./style.scss";


function Dashboard(props) {

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
        </div>
    );
}
export default Dashboard;
