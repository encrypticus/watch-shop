import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '#comps/header';
import IndexPage from '#pages/index';
import CardPage from '#pages/card';
import CatalogPage from '#pages/catalog';

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Header/>

        <Switch>
          <Route path='/' exact component={IndexPage}/>
          <Route path='/catalog' exact component={CatalogPage}/>
          <Route path='/card' exact component={CardPage}/>
          <Route render={() => (<h1 className="text-center">Page not found</h1>)}/>
        </Switch>

      </div>
    </Router>
  );
};

export default App;