import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../auth/pages/LoginPage";
import RegistrationPage from "../auth/pages/RegistrationPage";
import MainDashboardApp from "../dashboard/MainDashboardApp";
import { AuthProvider } from "../auth/context/auth.Context";

<Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/registration" element={<RegistrationPage />} />
    <Route path="*" element={<MainDashboardApp />} />
</Routes>

export default function RouteComponent() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/registration" element={<RegistrationPage />} />
                <Route path="*" element={<MainDashboardApp />} />
            </Routes>
        </AuthProvider>
    )
}
