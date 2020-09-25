import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer, Flip } from 'react-toastify';
import IndexPage from '#pages/index';
import CardPage from '#pages/card';
import CatalogPage from '#pages/catalog';
import ProductCartPage from '#pages/product-cart';
import FavoritesCartPage from '#pages/favorites-cart';
import Page404 from '#pages/404';
import MainNav from '#comps/main-nav';
import store from '#store';
import Footer from '#comps/footer';
import { RemoteDBServiceContext, LocalStorageServiceContext } from '#context';
import { remoteDBService, localStorageService } from '#services';

const App = () => (
  <RemoteDBServiceContext.Provider value={remoteDBService}>
    <LocalStorageServiceContext.Provider value={localStorageService}>
      <Provider store={store}>
        <Router>
          <MainNav/>

          <Switch>
            <Route path='/' exact component={IndexPage}/>
            <Route path='/catalog' exact component={CatalogPage}/>
            <Route path='/card/:id' exact component={CardPage}/>
            <Route path='/product-cart' exact component={ProductCartPage}/>
            <Route path='/favorites-cart' exact component={FavoritesCartPage}/>
            <Route component={Page404}/>
          </Switch>

          <ToastContainer
            position='bottom-right'
            hideProgressBar={true}
            pauseOnHover={false}
            pauseOnFocusLoss={false}
            transition={Flip}
          />
          <Footer/>
        </Router>
      </Provider>
    </LocalStorageServiceContext.Provider>
  </RemoteDBServiceContext.Provider>
);

export default App;
