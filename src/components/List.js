import React from 'react';
import PriceList from './Prices';

class List extends React.Component {
	
  render() { 
  	return (
   	 	<article>
    		<ol>{ 
            	this.props.items && this.props.items.length > 0? 
            		this.props.items.map( (item, k) => 
    						(<li key={ `product-item-${k}` }>
								<h1>{ item.name }</h1>
								<PriceList items={ item.prices } />
							</li>) ) : <li>No Products</li> }</ol>
    		</article>
  	  ); 
	}
}

export default List;