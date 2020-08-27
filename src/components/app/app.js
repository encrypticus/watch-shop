import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import IndexPage from '#pages/index';
import CardPage from '#pages/card';
import CatalogPage from '#pages/catalog';
import MainNav from '#comps/main-nav';
import store from '#store';
import Footer from '#comps/footer';

const App = () => (
    <Provider store={store}>
      <Router>
        <MainNav/>

        <Switch>
          <Route path='/' exact component={IndexPage}/>
          <Route path='/catalog' exact component={CatalogPage}/>
          <Route path='/card/:id' exact component={CardPage}/>
          <Route render={() => (<h1 className="text-center">Страница не найдена</h1>)}/>
        </Switch>

        <Footer/>
      </Router>
    </Provider>
);

export default App;
