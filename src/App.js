import React, { Component } from 'react';
import {Route, Switch} from 'react-router';

import Home from './pages/HomePageComponent';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';

class App extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
          <div>
                <Switch>
                 <Route exact path='/' render={props=><Home {...props} />} />
                 <Route exact path='/contact' component={Contact} />
                 <Route exact path='/portfolio' component={Portfolio} /> 
                 <Route path='/' component={NotFound} />
                             
            </Switch>
              </div>
        )
    }

}
export default App;