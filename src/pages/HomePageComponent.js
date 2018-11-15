import React, { Component } from 'react';
import {   
    Link
  } from 'react-router-dom';
class Home extends Component
{

    vinayTest()
    {
        console.log('Script is runing');
    }
    render()
    {
        return(
            <div>
                <h1>My Homepage</h1> 
                <Link  to="/">Home</Link> <br />
                <Link  to="/contact">contact</Link>  <br />
                <Link  to="/portfolio">Portfolio</Link>                
                <button onClick={() => this.vinayTest()}>Click </button>
                </div>
        );
    }
}

export default Home;