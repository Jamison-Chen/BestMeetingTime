import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import "./css/Room.css";

class Room extends React.Component {
    componentDidMount() {
        if (this.props.isLoggedIn) fetch("mybackend");
    }
    decideView() {
        return this.props.loggedIn ? (
            this.getMainView()
        ) : (
            <Navigate
                to={`./check-identity?room-number=${this.props.params.roomNumber}`}
            />
        );
    }
    getMainView() {
        return (
            <>
                <div>Main View</div>
                Room: {this.props.params.roomNumber}
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

export default function WrapperFunction(props) {
    return <Room {...props} params={useParams()} />;
}
