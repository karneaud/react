import React from 'react';
import { subscribe } from '../state';

class Prices extends React.PureComponent {

	constructor(props){
		super(props);
		this.state = { price: null }
	}

	componentDidMount() {
		subscribe(
			(s) => {
				if(s.currency) this.setState({ price : this.props.items.find( item => item.currency === s.currency ) })
			});
	}

	render() { 
		return (
			<React.Fragment>
				<p>{ this.state.price? 
				(`${this.state.price.amount.toFixed(2)} ${ this.state.price.currency }`) : 'Not Available in currency' } </p>
			</React.Fragment>
		); 
	}
}

export default Prices;