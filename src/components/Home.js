import React from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../logo.svg";
import "./css/Home.css";

class Home extends React.Component {
    render() {
        return (
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <nav>
                    <Link
                        id="create-room-btn"
                        className="home-btn"
                        to="/create-room"
                    >
                        Create a Room
                    </Link>
                    <Link
                        id="enter-room-btn"
                        className="home-btn"
                        to="/enter-room"
                    >
                        Enter a Room
                    </Link>
                </nav>
            </div>
        );
    }
}

export default function WrapperFunction(props) {
    return <Home {...props} params={useParams()} />;
}
