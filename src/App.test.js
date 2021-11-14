import { screen, render, waitFor } from '@testing-library/react';
import App from './App';

const mockItems = {"data":{"category":{"name":"clothes","products":[{"name":"Nike Air Huarache Le","prices":[{"currency":"USD","amount":144.69},{"currency":"GBP","amount":104},{"currency":"AUD","amount":186.65},{"currency":"JPY","amount":15625.24},{"currency":"RUB","amount":10941.76}]},{"name":"Jacket","prices":[{"currency":"USD","amount":518.47},{"currency":"GBP","amount":372.67},{"currency":"AUD","amount":668.83},{"currency":"JPY","amount":55990.46},{"currency":"RUB","amount":39207.96}]}]}}};
                                         
describe('test app component' , () => {
	test('should load data via listProductOfCategory', 
    		() => {
    		 	const testListProductsOfCategory = jest.fn( function(category){
                	this.fetchData(category).then(data => this.setState( { items: data.category.products }))
                }, "clothes" );
    		 	App.prototype.fetchData = (q) => Promise.resolve(mockItems);
    		 	App.prototype.listProductsOfCategory = testListProductsOfCategory;
    			render(<App/>, { wrapper: App });
    		 	waitFor(() => { 
                	expect(testListProductsOfCategory).toHaveBeenCalledWith('clothes');
              		expect(screen.getByText('Nike Air Huarache Le')).toBeInTheDocument(); 
                });
			}
    );

});
