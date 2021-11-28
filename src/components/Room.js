import React from "react";
import { Link, Navigate } from "react-router-dom";
import "./css/Room.css";

export class Room extends React.Component {
    getRoomNumber() {
        return window.location.href
            .split("room-number")[1]
            .split("&")[0]
            .slice(1);
    }
    componentDidMount() {
        if (this.props.isLoggedIn) fetch("mybackend");
    }
    decideView() {
        let loggedIn = true;
        return loggedIn ? (
            this.getMainView()
        ) : (
            <Navigate
                to={`./check-identity?room-number=${this.getRoomNumber()}`}
            />
        );
    }
    getMainView() {
        return (
            <>
                <div>Main View</div>
                Room: {this.getRoomNumber()}
            </>
        );
    }
    render() {
        return (
            <div>
                {this.decideView()}
                <Link id="back-to-home-link" to="/">
                    Back to Home
                </Link>
            </div>
        );
    }
}
