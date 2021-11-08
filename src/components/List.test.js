import { render, screen } from '@testing-library/react';
import List from './List';

const data = [{"name":"Nike Air Huarache Le","prices":[{"currency":"USD","amount":144.69},{"currency":"GBP","amount":104},{"currency":"AUD","amount":186.65},{"currency":"JPY","amount":15625.24},{"currency":"RUB","amount":10941.76}]},{"name":"Jacket","prices":[{"currency":"USD","amount":518.47},{"currency":"GBP","amount":372.67},{"currency":"AUD","amount":668.83},{"currency":"JPY","amount":55990.46},{"currency":"RUB","amount":39207.96}]},{"name":"PlayStation 5","prices":[{"currency":"USD","amount":844.02},{"currency":"GBP","amount":606.67},{"currency":"AUD","amount":1088.79},{"currency":"JPY","amount":91147.25},{"currency":"RUB","amount":63826.91}]},{"name":"Xbox Series S 512GB","prices":[{"currency":"USD","amount":333.99},{"currency":"GBP","amount":240.07},{"currency":"AUD","amount":430.85},{"currency":"JPY","amount":36068.27},{"currency":"RUB","amount":25257.22}]},{"name":"iMac 2021","prices":[{"currency":"USD","amount":1688.03},{"currency":"GBP","amount":1213.34},{"currency":"AUD","amount":2177.57},{"currency":"JPY","amount":182294.51},{"currency":"RUB","amount":127653.82}]},{"name":"iPhone 12 Pro","prices":[{"currency":"USD","amount":1000.76},{"currency":"GBP","amount":719.34},{"currency":"AUD","amount":1290.99},{"currency":"JPY","amount":108074.6},{"currency":"RUB","amount":75680.48}]},{"name":"AirPods Pro","prices":[{"currency":"USD","amount":300.23},{"currency":"GBP","amount":215.8},{"currency":"AUD","amount":387.3},{"currency":"JPY","amount":32422.38},{"currency":"RUB","amount":22704.14}]},{"name":"AirTag","prices":[{"currency":"USD","amount":120.57},{"currency":"GBP","amount":86.67},{"currency":"AUD","amount":155.54},{"currency":"JPY","amount":13021.04},{"currency":"RUB","amount":9118.13}]}];


describe('test list component', () => {
	test('should be list component with no data', () => {
 		render(<List items={ [] } />);
 		expect(screen.getByText('No Data')).toBeInTheDocument();
	});

	test('should contain product data name', () => {
    	render(<List items={ data } />);
 		 expect(screen.getByText('Nike Air Huarache Le')).toBeInTheDocument();
    });
})



