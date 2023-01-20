import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import Home from './pages/HomePage/Home';
import { store } from './redux/configStore';
import HomeTemplate from './template/HomeTemplate';
import '../src/assets/scss/style.scss'


export const history = createBrowserHistory({ window });
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route path="" element={<Home />}></Route>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);


