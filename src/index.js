import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Page/LoginPage";
import RegisterPage from "./Page/RegisterPage";
import InfoPage from "./Page/InfoPage";
import AchievementsPage from "./Page/AchievementsPage";
import BearPage from "./Page/BearPage";
import MessageBoard from "./Page/MessageBoard";
import NotFoundPage from "./Page/NotFoundPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<App />} />
      <Route path="/info" element={<InfoPage />} />
      <Route path="/achievements" element={<AchievementsPage />} />
      <Route path="/aboutBear" element={<BearPage />} />
      <Route path="/messageBoard" element={<MessageBoard />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
