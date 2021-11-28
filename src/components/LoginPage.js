import React from "react";
import { Link } from "react-router-dom";

export class LoginPage extends React.Component {
    render() {
        return (
            <div>
                LoginPage
                <Link id="back-to-home-link" to="/">
                    Back to Home
                </Link>
            </div>
        );
    }
}
