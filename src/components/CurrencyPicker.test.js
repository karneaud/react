import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CurrencyPicker from './CurrencyPicker';

const items =  [
      "USD",
      "GBP",
      "AUD",
      "JPY",
      "RUB"
    ];

CurrencyPicker.prototype.componentDidMount = function() { this.setState({ items, selected: "USD" }) };

describe('test currency component', () => {
	test('should have menu item elements', () => {
    		render(<CurrencyPicker />, { wrapper: CurrencyPicker });
 		 expect(screen.getByText('USD')).toBeTruthy();
    });

	test('should return currency name onCurrencySelected', () => {
    	const testCurrencySelected = jest.fn(),
              { container } = render(<CurrencyPicker onCurrencySelected={ testCurrencySelected } />, { wrapper: CurrencyPicker } );
        	fireEvent.click(screen.getByText('GBP'))
    		waitFor(() => {
    			expect(testCurrencySelected).toHaveBeenCalledTimes(1);
				expect(testCurrencySelected).toHaveBeenCalledWith('GBP');
				expect(container.querySelector('.selected')).toBeTruthy();
    		});
    });
})



