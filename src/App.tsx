import React from 'react';
import ReactNotification from 'react-notifications-component';
import { StoreProvider } from 'easy-peasy';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import Routes from './routes/index';
import GlobalStyle from './assets/globalStyles';
import LayoutApontamento from './components/Layout/index';
import 'assets/notification.css';

function App() {
  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <LayoutApontamento>
          <ReactNotification />
          <Routes />
          <GlobalStyle />
        </LayoutApontamento>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
