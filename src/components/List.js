import React from 'react';

class List extends React.Component {
	
  render() { 
  	return (
   	 	<article>
    		<ol>{ 
            	this.props.items && this.props.items.length > 0? 
            		this.props.items.map( (item, k) => 
    						(<li key={ `product-item-${k}` }>
								<h1>{ item.name }</h1>
								<p></p>
							</li>) ) : <li>No Products</li> }</ol>
    		</article>
  	  ); 
	}
}

export default List;