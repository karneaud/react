import React from 'react';
import { client, Query, Field } from '@tilework/opus';

const query = new Query('categories', true) 
		.addFieldList( ['name'] );

class Category extends React.PureComponent {
  
	constructor(props) {
    	super(props);
    	this.state = { items: [], selected: null };
   }

	selectCategory(selected) {
    	this.setState({ selected });
    }

	componentDidMount() {
  		client.post(query).then((data) => {
    		let items = data.categories, category = items[0].name;
  			this.setState({ items, selected: category });
    	}).catch(e => console.log(e))
  	}
	
	componentDidUpdate(p, s) {
    	if((s.selected != this.state.selected) && 
           this.props.onCategorySelected) this.props.onCategorySelected(this.state.selected);
    }
	
	

   render() { 
  	return (
    	<React.Fragment>
   	 	{ this.state.items && this.state.items.length > 0 ? 
                 	this.state.items.map( 
                 			(item, k) => 
    							(<li className={ `category-menu-item ${ this.state.selected == item? 'selected' : ''  }`  }  key={ `category-menu-item-${k}` }>
									<a href="#" className="btn btn-link" onClick={ this.selectCategory.bind(this, item.name) }><span>{ item.name }</span></a>
								</li>) 
							) : <li><h2>No Categories</h2></li> }
    	</React.Fragment>
  	  ); 
	}
}

export default Category;