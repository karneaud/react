import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CurrencyPicker from './CurrencyPicker';

const items =  [
      "USD",
      "GBP",
      "AUD",
      "JPY",
      "RUB"
    ];

CurrencyPicker.prototype.componentDidMount = function() { this.setState({ items, currency: "USD" }) };

describe('test currency component', () => {
	test('should have menu item elements', () => {
    	render(<CurrencyPicker />, { wrapper: CurrencyPicker });
 		expect(screen.getByText('USD')).toBeTruthy();
    });

	test('should reflect new currrency', () => {
    	const { container } = render(<CurrencyPicker />, { wrapper: CurrencyPicker } ), select = container.querySelector('select');
        fireEvent.change( select, { target: { value: 'GBP' } })
    	waitFor(() => {
    		expect(container.querySelector('select').value).toEqual('GBP');
    	});
    });
})



