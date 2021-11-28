import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./css/LoginPage.css";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickLogin = this.handleClickLogin.bind(this);
    }

    handleClickLogin(event) {
        this.props.navigate("../");
    }

    render() {
        return (
            <div id="log-in-page">
                <div id="log-in-form">
                    <div className="form-head">Log In</div>
                    <div className="form-body">
                        <label className="input-label">E-mail</label>
                        <input type="email" className="underline-input" />
                    </div>
                    <div className="form-foot">
                        <Link to="./../" className="back-btn">
                            ←back
                        </Link>
                        <button
                            className="log-in-btn"
                            onClick={this.handleClickLogin}
                        >
                            Log In
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default function WrapperFunction(props) {
    return <LoginPage {...props} navigate={useNavigate()} />;
}
