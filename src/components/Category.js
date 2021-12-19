import React from 'react';
import { client, Query } from '@tilework/opus';
import { set } from '../state';

const query = new Query('categories', true) 
		.addFieldList( ['name'] );

class Category extends React.PureComponent {
  
	constructor(props) {
    	super(props);
    	this.state = { items: [], category: null };
   }

	selectCategory(category) {
    	this.setState({ category });
    }

	componentDidUpdate(p, s) {
		if(s.category !== this.state.category) set({  category: this.state.category })
	}

	componentDidMount() {
  		client.post(query).then((data) => {
    		let items = data.categories, category = items[0].name;
  			this.setState({ items, category });
    	}).catch(e => console.log(e))
  	}
	

   render() { 
  	return (
    	<React.Fragment>
   	 	{ this.state.items && this.state.items.length > 0 ? 
                 	this.state.items.map( 
                 			(item, k) => 
    							(<li className={ `category-menu-item ${ this.state.category === item? 'selected' : ''  }`  }  key={ `category-menu-item-${k}` }>
									<a href={`#${ item.name }`} className="btn btn-link" onClick={ this.selectCategory.bind(this, item.name) }><span>{ item.name }</span></a>
								</li>) 
							) : <li><h2>No Categories</h2></li> }
    	</React.Fragment>
  	  ); 
	}
}

export default Category;