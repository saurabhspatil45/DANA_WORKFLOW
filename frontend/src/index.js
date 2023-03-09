import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UserRegistration from "./components/User/UserRegistration";
import Protected from "./components/Protected";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/User/Login";
import Profile from "./components/User/Profile";
import HomePage from "./components/Pages/Home";
import Observation from "./components/Pages/Observation";
import TaskPage from "./components/Pages/Task";
import Ncrmain from "./components/Pages/Ncrmain";
import ManageUser from "./components/User/ManageUser";
import NavigationBar from "./components/User/Dashboard";
import NcrDetails from "./components/Pages/NcrDetails";
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="app" element={<App />}></Route>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/NCR" element={<Ncrmain />} />
        <Route path="/Observation" element={<Observation />} />
        <Route path="/Task" element={<TaskPage />} />
        <Route path="/Users" element={<ManageUser />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ncrdetails" element={<NcrDetails />}></Route>
        <Route
          path="userregistration"
          element={<Protected Component={UserRegistration} />}
        ></Route>
        <Route
          path="profile"
          element={<Protected Component={Profile} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
