import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MembersProvider } from "./providers";
import { DetailPage } from "./pages/detail/detail";
import { ListPage } from "./pages/list/list";
import { LoginPage } from "./pages/login/login";
import { routes } from "./routes";

export const App = () => {
  return (
    <MembersProvider>
      <Router>
        <Routes>
          <Route path={routes.login}element={<LoginPage />} />
          <Route path={routes.gitHubList}element={<ListPage />} />
          <Route path={routes.gitHubDetail}element={<DetailPage />} />
        </Routes>
      </Router>
    </MembersProvider>
  );
};
