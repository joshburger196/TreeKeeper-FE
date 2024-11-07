import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.css'
import "./App.css"

import Root from './Pages/Root'
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';
import UniverseListPage from './Pages/UniverseListPage';
import ErrorPage from './Pages/ErrorPage';

function App() {

  const [isUserLogged] = useState(false);

  return (<BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={isUserLogged ? <Root /> : <Navigate to="/login" />}
      />
      <Route
        path="/login"
        element={<LoginPage />}
      />
      <Route
        path="/register"
        element={<RegistrationPage />}
      />
      <Route
        path="/universes/*"
        element={<UniverseListPage />}
      />
      <Route
        path="/error/:errorCode"
        element={<ErrorPage />}
      />
      <Route
        path="/*"
        element={<ErrorPage />}
      />
    </Routes>
  </BrowserRouter>)
}

export default App
