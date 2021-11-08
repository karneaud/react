import React from 'react';

class List extends React.Component {
	
  render() { 
  	return (
   	 	<section>
    		<article>
    		<ol>{ 
            	this.props.items && this.props.items.length > 0? 
            		this.props.items.map( (item, k) => 
    						(<li key={ `product-item-${k}` }>
								<h1>{ item.name }</h1>
							</li>) ) : <li>No Data</li> }</ol>
    		</article>
		</section>
  	  ); 
	}
}

export default List;