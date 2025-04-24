import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MembersProvider } from "./providers";
import { MemberDetailPage } from "./pages/github/detail/detail";
import { MembersListPage } from "./pages/github/list/list";
import { LoginPage } from "./pages/login/login";
import { routes } from "./routes";
import { AppLayout } from "./layouts/app.layout";
import { CharacterProvider } from "./providers/character";
import { CharacterDetailPage, CharactersListPage } from "./pages/rick-and-morty";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.login} element={<LoginPage />} />
      </Routes>
      <AppLayout>
        <MembersProvider>
          <Routes>
            <Route path={routes.gitHubMembersList} element={<MembersListPage />} />
            <Route path={routes.gitHubMemberDetail} element={<MemberDetailPage />} />
          </Routes>
        </MembersProvider>
        <CharacterProvider>
          <Routes>
            <Route path={routes.rickAndMortyCharacterList} element={<CharactersListPage />} />
            <Route path={routes.rickAndMortyCharacterDetail} element={<CharacterDetailPage />} />
          </Routes>
        </CharacterProvider>
      </AppLayout>
    </Router>
  );
};
