import React from 'react';
import ReactNotification from 'react-notifications-component';
import { StoreProvider } from 'easy-peasy';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import Routes from './routes/index';
import GlobalStyle from './assets/globalStyles';
import 'assets/notification.css';

const App: React.FC = () => {
  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <ReactNotification />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </StoreProvider>
  );
};

export default App;
