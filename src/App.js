import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import List from './components/List.js';
import { client, Query, Field, InlineFragment } from '@tilework/opus';

client.setEndpoint(process.env.REACT_APP_GRAPHQL_ENDPOINT);

const productQuery = new Query('category', true) // `true` means 'expect array'
    	.addField(new Field('products')
         	.addFieldList( ['name'] )
                  .addField(new Field('prices').addFieldList(['currency','amount']))
    	);

class App extends React.Component {

	constructor(props) {
    	super(props)
    	
    	this.state = { items: [] }
    }

  async componentDidMount() {
  	let items =  await client.post(productQuery);
  	this.setState({ 'items': items.category.products });
  }

  render() { 
  	return (
   	 	<Router>
    		<Suspense fallback={<div>Loading...</div>}>
      			<Routes>
        			<Route exact path="/" element={ <List items={ this.state.items } /> } />
      			</Routes>
    		</Suspense>
  		</Router>
  	  ); 
	}
}

export default App;
