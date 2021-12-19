import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './components/List';
import CategoryMenu from './components/Category';
import CurrencyMenu from './components/CurrencyPicker';
import { client, Query, Field } from '@tilework/opus';
import { subscribe } from './state';

client.setEndpoint(process.env.REACT_APP_GRAPHQL_ENDPOINT);

class App extends React.Component {

	constructor(props) {
    	super(props)
    	this.state = { items: [], category: null }
    }

  fetchData(query) {
  	return client.post(query)
  }

  componentDidMount() {
	  subscribe(
		  (s) => {
			  if(s.category) this.listProductsOfCategory(s.category)
		  });
  }

  listProductsOfCategory(title) {
  	const productQuery = new Query('category', true) 
    	.addArgument('input', 'CategoryInput', {title })
		.addFieldList( ['name'] )
    	.addField(new Field('products')
         	.addFieldList( ['name'] )	
                  .addField(new Field('prices').addFieldList(['currency','amount']))
    	);
  	this.fetchData(productQuery).then((data) => {
    	let items = data.category.products;
  		this.setState({ items });
    }).catch(e => console.log(e));
  }

  render() { 
  		
    		 return ( 
             <React.Fragment>
             	<nav>
             		<ul>
               			<CategoryMenu />
  					</ul>
  				</nav>
				  <nav>
             		<CurrencyMenu />
  				  </nav>
  				<section>
				 <Router>
    				<Suspense fallback={<div>Loading...</div>}>
      					<Routes>
        					<Route exact path="/" element={ <ProductList items={ this.state.items } /> } />
                            </Routes>
    					</Suspense>
  					</Router> 	
                   </section>
           	 	 </React.Fragment>
				);
	}
}

export default App;
