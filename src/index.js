import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LoginRegister from "./Screens/LoginRegister";
import { Provider } from "react-redux";
import store from "./store";
import HomeScreen from "./Screens/HomeScreen";
import PrivateRoute from "./security/PrivateRoute";
import CarScreen from "./Screens/CarScreen";
import SingleCarScreen from "./Screens/SingleCarScreen";
import "react-datepicker/dist/react-datepicker.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<LoginRegister />} />
      <Route path="/" element={<LoginRegister />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/cars" element={<CarScreen />} />
        <Route path="/car/:id" element={<SingleCarScreen />} />
      </Route>
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
