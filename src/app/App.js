import React from 'react';

import {Route} from 'react-router-dom';
import Main from './containers/Main';
import Header from './partials/Header';


const App = () => {

  return (
    <React.Fragment>
      <Header />
      <Route exact path="/" component={Main} />
    </React.Fragment>

  )
}


export default App;
