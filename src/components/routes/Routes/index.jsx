import { Route, Routes } from 'react-router-dom';
import React from 'react';
import TreasuresPage from '../../../pages/TreasuresPage';
import ProfilePage from '../../../pages/ProfilePage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TreasuresPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default AppRoutes;
