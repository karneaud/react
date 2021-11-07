import React from 'react';

class List extends React.Component {
	
  constructor(props) {
  	super(props);
  }

  render() { 
  	return (
   	 	<div>
    		List
    		<ol>{ this.props.items.length > 0 ? this.props.items.map( (item, k) => (<li key={ `product-item-${k}` }><h1>{ item.name }</h1></li>) ) : <li>No Data</li> }</ol>
    	</div>
  	  ); 
	}
}

export default List;