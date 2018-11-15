import React, { Component } from 'react';
import {   
    Link
  } from 'react-router-dom';
class Portfolio extends Component
{

    componentDidMount()
    {
        // fetch(
		// 	'http://www.risersinfotech.com/adminvinay/api.php?type=blogs'
		// )
		// 	.then(result => {
		// 		return result.json();
		// 	})
		// 	.then(jsonResult => {
        //        // this.setState({slides:jsonResult});	
        //        console.log(jsonResult);			
		// 	});
    } 
    render()
    {
        return(
            <div>
                <h1>My Portfolio</h1> 
                <Link  to="/">Home</Link> <br />
                <Link  to="/contact">contact</Link>                 
                
                </div>
        );
    }
}

export default Portfolio;