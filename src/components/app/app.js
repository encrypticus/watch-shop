import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '#comps/header';
import IndexPage from '#pages/index';
import CardPage from '#pages/card';
import CatalogPage from '#pages/catalog';
import MainNav from '#comps/main-nav';
import { Provider } from 'react-redux';
import store from '#store';
import Socials from '#comps/socials';
import Hero from '#comps/hero';
import Footer from '#comps/footer';


const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <MainNav/>

          <Switch>
            <Route path='/' exact component={IndexPage}/>
            <Route path='/catalog' exact component={CatalogPage}/>
            <Route path='/card' exact component={CardPage}/>
            <Route render={() => (<h1 className="text-center">Page not found</h1>)}/>
          </Switch>

        <Footer/>
      </Router>
    </Provider>
  );
};

export default App;