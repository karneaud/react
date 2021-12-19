import React from 'react';
import { client, Query } from '@tilework/opus';
import { set } from '../state';

const query = new Query('currencies', true);

class CurrencyPicker extends React.PureComponent {
  
	constructor(props) {
    	super(props);
    	this.state = { items: [], currency: null };
   }

	selectCurrency(currency) {
		this.setState({ currency });
    }

	componentDidUpdate(p, s) {
		if(s.currency !== this.state.currency ) set({ currency: this.state.currency })
	}

	componentDidMount() {
  		client.post(query).then((data) => {
    		let items = data.currencies, currency = items[0];
  			this.setState({ items, currency });
    	}).catch(e => console.log(e))
  	}

   render() { 
  	return (
    	<select id="currencyPicker" defaultValue={ this.state.currency } onChange={ (e) => this.selectCurrency(e.currentTarget.value) }>
    		<option value>Select Currency</option>
   	 	if( this.state.items && (this.state.items.length > 0) ) {
                 	this.state.items.map( 
                 			(item, k) => 
    							(<option value={ item } key={ `currency-menu-item-${k}` }>{ item }</option>) )
			}
			</select>
  	  ); 
	}
}

export default CurrencyPicker;