import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import "./main.scss";
import Layout from "./Pages/Layout";
import Landing from "./Pages/Landing";
import Board from "./Pages/Board";
import NoPage from "./Pages/NoPage";
import Events from "./Pages/Events";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/board" element={<Board />} />
          <Route path="/events" element={<Events />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
