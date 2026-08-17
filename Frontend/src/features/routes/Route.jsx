import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../auth/pages/LoginPage";
import RegistrationPage from "../auth/pages/RegistrationPage";
import { MainDashboardApp } from "../../App";
import AuthProtected from "../auth/Protected/AuthProtected";

export default function RouteComponent() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route
                path="*"
                element={
                    <AuthProtected>
                        <MainDashboardApp />
                    </AuthProtected>
                }
            />
        </Routes>
    );
}

