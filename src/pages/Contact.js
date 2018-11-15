import React, { Component } from 'react';
import {   
    Link
  } from 'react-router-dom';
class AAAAA extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <div>
                <h1>Contact Us Page</h1>
                <Link  to="/">Home</Link> <br />
                <Link  to="/contact">contact</Link>  <br />
                <Link  to="/portfolio">Portfolio</Link>  
                </div>
        )
    }
}

export default AAAAA;