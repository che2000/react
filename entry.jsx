import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
 
import ErrorBoundary from './ErrorBoundary.jsx'
import App from './App.jsx'
import Register from './Register.jsx'
import Detail from './Detail.jsx'

import './main.scss'
 
 ReactDOM.render(
	<ErrorBoundary>
		<Router>
		  <Switch>
			<Route path='/register' component={Register} />
			<Route path='/Detail/:goodsID' component={Detail} />
			<Route path='/' component={App} />
		  </Switch>
		</Router>
	</ErrorBoundary>,
	document.getElementById('root')
 )
 
