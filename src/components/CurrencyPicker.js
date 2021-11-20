import React from 'react';
import { client, Query, Field } from '@tilework/opus';

const query = new Query('currencies', true);

class CurrencyPicker extends React.PureComponent {
  
	constructor(props) {
    	super(props);
    	this.state = { items: [], selected: null };
   }

	selectCurrency(selected) {
    	this.setState({ selected });
    }

	componentDidMount() {
  		client.post(query).then((data) => {
    		let items = data.currencies, currency = items[0].name;
  			this.setState({ items, selected: currency });
    	}).catch(e => console.log(e))
  	}
	
	componentDidUpdate(p, s) {
    	if((s.selected != this.state.selected) && 
           this.props.onCurrencySelected) this.props.onCurrencySelected(this.state.selected);
    }
	
	

   render() { 
  	return (
    	<select onChange={ this.selectCurrency }>
    		<option>Select Currency</option>
   	 	if( this.state.items && this.state.items.length > 0 ) {
                 	this.state.items.map( 
                 			(item, k) => 
    							(<option className={ `curency-menu-item ${ this.state.selected == item? 'selected' : ''  }`  }  key={ `currency-menu-item-${k}` }>{ item }</option>) )
			}
			</select>
  	  ); 
	}
}

export default CurrencyPicker;