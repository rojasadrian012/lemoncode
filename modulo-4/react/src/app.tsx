import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MembersProvider } from "./providers";
import { DetailPage, ListPage, LoginPage } from "./pages";

export const App = () => {
  return (
    <MembersProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </MembersProvider>
  );
};
