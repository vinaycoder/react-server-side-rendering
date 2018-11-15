import React, { Component } from 'react';
import {   
    Link
  } from 'react-router-dom';
class NotFound extends Component
{ 
    render()
    {
        return(
            <div>
                <h1>Requestes url is not found</h1> 
                <Link  to="/">Go to Home page</Link> <br />
                               
                
                </div>
        );
    }
}

export default NotFound;