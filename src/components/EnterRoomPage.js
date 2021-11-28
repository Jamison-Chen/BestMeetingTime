import React from "react";
import { Link } from "react-router-dom";

import BackToHomeButton from "./BackToHomeButton";
import "./css/EnterRoomPage.css";

export class EnterRoomPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { roomNumber: "", destination: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({
            roomNumber: event.target.value,
            destination: `/room/${event.target.value}/check-identity`,
        });
    }

    handleClick(event) {
        if (this.state.roomNumber.trim() === "") {
            event.preventDefault();
        }
    }

    render() {
        return (
            <div>
                <div id="enter-room-form">
                    <div>Please Enter the Room Number</div>
                    <div id="input-container">
                        <input
                            id="room-number-input"
                            className="underline-input"
                            type="text"
                            name="room-number"
                            value={this.state.roomNumber}
                            onChange={this.handleChange}
                        />
                        <Link
                            id="go-btn"
                            onClick={this.handleClick}
                            to={this.state.destination}
                        >
                            Go
                        </Link>
                    </div>
                </div>
                <BackToHomeButton />
            </div>
        );
    }
}
