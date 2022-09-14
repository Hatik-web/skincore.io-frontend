import React from 'react';
import './app.scss';
import Routes from './components/routes/Routes';
import AppLayout from './components/layout/AppLayout';

function App() {
  return (
    <AppLayout>
      <Routes />
    </AppLayout>
  );
}

export default App;
