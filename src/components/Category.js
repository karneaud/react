import React from 'react';

class Category extends React.PureComponent {
	
  render() { 
  	return (
    	<React.Fragment>
   	 	{ this.props.items && this.props.items.length > 0 ? 
                 	this.props.items.map( 
                 			(item, k) => 
    							(<li className="category-menu-item" key={ `category-menu-item-${k}` }>
									<a href="" className="btn btn-link"><span>{ item }</span></a>
								</li>) 
							) : <li><h2>No Data</h2></li> }
    	</React.Fragment>
  	  ); 
	}
}

export default Category;