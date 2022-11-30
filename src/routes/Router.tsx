import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/Register";

export const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout pageTitle={"Profile"}>
            <Profile />
          </Layout>
        }
      />
      <Route
        path="/register"
        element={
          <Layout pageTitle={"Register"}>
            <Register />
          </Layout>
        }
      />
    </Routes>
  );
};
