import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MembersProvider } from "./providers";
import { MemberDetailPage } from "./pages/github/detail/detail";
import { MembersListPage } from "./pages/github/list/list";
import { LoginPage } from "./pages/login/login";
import { routes } from "./routes";
import { AppLayout } from "./layouts/app.layout";
import { CharactersListPage } from "./pages/rick-and-morty/list/list";
import { CharacterDetailPage } from "./pages/rick-and-morty/detail/detail";

export const App = () => {
  return (
    <Router>
      <AppLayout>
        <MembersProvider>
          <Routes>
            <Route path={routes.login} element={<LoginPage />} />
            <Route path={routes.gitHubMembersList} element={<MembersListPage />} />
            <Route path={routes.gitHubMemberDetail} element={<MemberDetailPage />} />
          </Routes>
        </MembersProvider>
        <Routes>
          <Route path={routes.rickAndMortyCharacterList} element={<CharactersListPage />} />
          <Route path={routes.rickAndMortyCharacterDetail} element={<CharacterDetailPage />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};
