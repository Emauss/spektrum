import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { IProfileSpecific } from "../interfaces/api/IProfileSpecific";
import Layout from "../layouts/Layout";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/Register";

export const Router = () => {
  const [allData, setAllData] = useState<IProfileSpecific[]>([]);

  return (
    <DataContext.Provider value={{ allData, setAllData }}>
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
    </DataContext.Provider>
  );
};
