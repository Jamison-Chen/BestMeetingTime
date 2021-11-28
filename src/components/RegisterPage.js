import React from "react";
import { Link, useParams } from "react-router-dom";

import BackToHomeButton from "./BackToHomeButton";
import "./css/RegisterPage.css";

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nickname: "", email: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event, changeTarget) {
        this.setState({
            [changeTarget]: event.target.value,
        });
    }

    handleClick(event) {}

    render() {
        return (
            <div>
                <div id="register-form">
                    <input
                        id="nickname-input"
                        type="text"
                        name="nickname"
                        value={this.state.nickname}
                        onChange={(e) => this.handleChange(e, "nickname")}
                    />
                    <input
                        id="email-input"
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={(e) => this.handleChange(e, "email")}
                    />
                    <Link
                        id="join-btn"
                        onClick={this.handleClick}
                        to={`/room/${this.props.params.roomNumber}`}
                    >
                        Join
                    </Link>
                </div>
                <BackToHomeButton />
            </div>
        );
    }
}

export default function WrapperFunction(props) {
    return <RegisterPage {...props} params={useParams()} />;
}
