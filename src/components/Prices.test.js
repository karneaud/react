import { render, screen } from '@testing-library/react';
import PriceList from './Prices';

const data = [{"currency":"USD","amount":144.69},{"currency":"GBP","amount":104},{"currency":"AUD","amount":186.65},{"currency":"JPY","amount":15625.24},{"currency":"RUB","amount":10941.76}];

describe('test price list component', () => {
	test('should be price list component with USD price ', () => {
		PriceList.prototype.componentDidMount = function() { this.setState({ price: data[0] }) }
 		render(<PriceList items={ data } />, { wrapper: PriceList });
 		expect(screen.getByText('144.69 USD')).toBeInTheDocument();
	});

	test('should change to new price', () => {
    	PriceList.prototype.componentDidMount = function() { this.setState({ price: data[1] }) }
 		render(<PriceList items={ data } />, { wrapper: PriceList });
 		expect(screen.getByText("104.00 GBP")).toBeInTheDocument();
    });
})



