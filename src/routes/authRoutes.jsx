import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../pages/auth/LoginPage";
import { useAuth } from "../hooks/";
import { authStates } from "../helpers";
import { Dashboard } from "../pages/auth/Dashboard";

export const AuthRoutes = () => {
  const { auth } = useAuth();

  return (
    <>
      <Routes>
        {auth == authStates.authenticated ? (
          <>
            <Route path="/home/*" element={<Dashboard />} />
            <Route path="/*" element={ <Navigate to='/home' /> }/>
          </>
        ) : (
          <>
            <Route path="/*" element={<Navigate to="/auth/login" />} />
            <Route path="/auth/*" element={<LoginPage />} />
          </>
        )}
      </Routes>
    </>
  );
};
