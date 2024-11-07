import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.css'
import "./App.css"

import App from './App';


/*const router = createBrowserRouter([
  {
    path: "/",
    element: isUserLogged ? <Root></Root> : <LoginPage></LoginPage>,
    errorElement:<ErrorPage></ErrorPage>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/register",
    element: <RegistrationPage></RegistrationPage>,
  },
  {
    path: "/universes",
    element: <UniverseListPage></UniverseListPage>,
  },
  {
    path: "/universes/:id",
    element: <UniverseListPage></UniverseListPage>,
  },
  {
    path: "/:unid/skill-trees",
    element: <UniverseListPage></UniverseListPage>,
  },
  {
    path: "/:unid/:stid",
    element: <UniverseListPage></UniverseListPage>,
  },
]);*/

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
