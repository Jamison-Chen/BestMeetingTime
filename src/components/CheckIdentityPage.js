import React from "react";
import { Link, useParams } from "react-router-dom";

import BackToHomeButton from "./BackToHomeButton";
import "./css/CheckIdentityPage.css";

class CheckIdentityPage extends React.Component {
    getActionOptionSection() {
        if (this.props.role === undefined) {
            return (
                <nav>
                    <Link id="normal-member-btn" to="./normal-member">
                        I'm a Normal Member
                    </Link>
                    <Link id="administrator-btn" to="./administrator/login">
                        I'm the Administrator
                    </Link>
                </nav>
            );
        } else if (this.props.role === "normal-member") {
            return (
                <nav>
                    <Link id="register-btn" to="./register">
                        New to this room
                    </Link>
                    <Link id="login-btn" to="./login">
                        Old member
                    </Link>
                </nav>
            );
        }
    }
    render() {
        return (
            <div>
                <div>
                    <p>Welcome to {this.props.params.roomNumber}</p>
                    {this.getActionOptionSection()}
                </div>
                <BackToHomeButton />
            </div>
        );
    }
}

export default function WrapperFunction(props) {
    return <CheckIdentityPage {...props} params={useParams()} />;
}
