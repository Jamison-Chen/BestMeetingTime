import React from "react";
import { Link } from "react-router-dom";

import "./css/BackToHomeButton.css";

export default function BackToHomeButton() {
    return (
        <Link id="back-to-home" to="/">
            Back to Home
        </Link>
    );
}
