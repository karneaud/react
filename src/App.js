import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import List from './components/List.js';

class App extends React.PureComponent {
  render() { 
  	return (
   	 	<Router>
    		<Suspense fallback={<div>Loading...</div>}>
      			<Routes>
        			<Route exact path="/" element={ <List/> } />
      			</Routes>
    		</Suspense>
  		</Router>
  	  ); 
	}
}

export default App;
