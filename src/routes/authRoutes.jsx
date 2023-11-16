import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../pages/auth/LoginPage";

export const AuthRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Navigate to="/auth/login" />} />
        <Route path="/auth/*" element={<LoginPage />} />
      </Routes>
    </>
  );
};
