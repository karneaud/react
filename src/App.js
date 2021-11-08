import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './components/List.js';
import CategoryMenu from './components/Category.js';
import { client, Query, Field, InlineFragment } from '@tilework/opus';

client.setEndpoint(process.env.REACT_APP_GRAPHQL_ENDPOINT);

const productQuery = new Query('categories', true) // `true` means 'expect array'
		.addFieldList( ['name'] )
    	.addField(new Field('products')
         	.addFieldList( ['name'] )
                  .addField(new Field('prices').addFieldList(['currency','amount']))
    	);

class App extends React.Component {

	constructor(props) {
    	super(props)
    	this.state = { items: [], category: null }
    }

  componentDidMount() {
  	this.fetchData(productQuery).then((data) => {
    	let items = data.categories, category = items[0].name;
  		this.setState({ items, category });
    }).catch(e => console.log(e))
  }

  fetchData(query) {
  	return client.post(query)
  }

  render() { 
  	return (
    		<main>
    			{ this.state.items.length > 0?  
                <div>
                 <CategoryMenu items={ this.state.items.map(item => item.name ) } />
   	 			<Router>
    				<Suspense fallback={<div>Loading...</div>}>
      					<Routes>
        					<Route exact path="/" element={ <ProductList items={ this.state.items.find(item => item.name == this.state.category ).products } /> } />
      					</Routes>
    				</Suspense>
  				</Router> 
				</div> : <div><h1>No Data!</h1></div> } 
    		</main> 
    	);
	}
}

export default App;
