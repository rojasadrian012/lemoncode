import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { routes } from "./routes";
import { AppLayout } from "./layouts";
import { MembersProvider, CharacterProvider } from "./providers";
import { CharacterDetailPage, CharactersListPage, LoginPage, MemberDetailPage, MembersListPage } from "./pages";

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
