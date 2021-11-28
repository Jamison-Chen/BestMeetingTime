import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home.js";
import { CreateRoomPage } from "./CreateRoomPage.js";
import { EnterRoomPage } from "./EnterRoomPage.js";
import CheckIdentityPage from "./CheckIdentityPage.js";
import { LoginPage } from "./LoginPage.js";
import { Room } from "./Room.js";
import RegisterPage from "./RegisterPage.js";

export default function MyRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/create-room" element={<CreateRoomPage />} />
            <Route exact path="/enter-room" element={<EnterRoomPage />} />
            <Route exact path="/room" element={<Room />} />
            <Route
                exact
                path="/room/:roomNumber/check-identity"
                element={<CheckIdentityPage role={undefined} />}
            />
            <Route
                exact
                path="/room/:roomNumber/check-identity/normal-member"
                element={<CheckIdentityPage role="normal-member" />}
            />
            <Route
                exact
                path="/room/:roomNumber/check-identity/normal-member/register"
                element={<RegisterPage role="normal-member" />}
            />
            <Route
                exact
                path="/room/:roomNumber/check-identity/normal-member/login"
                element={<LoginPage role="normal-member" />}
            />
            <Route
                exact
                path="/room/:roomNumber/check-identity/administrator/login"
                element={<LoginPage role="administrator" />}
            />
        </Routes>
    );
}
