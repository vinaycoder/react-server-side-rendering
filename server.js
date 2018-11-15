import 'babel-polyfill';
import express from'express';
import React from "react";
import ReactDomServer from "react-dom/server";
import { StaticRouter } from "react-router";
import bodyParser from 'body-parser'
const app =express();
const PORT= process.env.PORT || 3000;

import App from './src/App';
app.use(bodyParser.json());
app.use(express.static('build/public'));
app.get('*',(req,res)=>{
    
    const context={};
    const content = ReactDomServer.renderToString(
        <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
    
    );
    const html=`
<html>
<head>
    <title></title>
</head>
<body>
<div id="root">${content}</div>
<script type="text/javascript" src='client_bundle.js'></script>
</body>
</html>`
res.send(html);
});
app.listen(PORT, ()=>{
    console.log('app is running at '+PORT);
})