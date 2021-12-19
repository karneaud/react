import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Category from './Category';

const items = [ { name: "tech" }, { name: "clothes" }];

Category.prototype.componentDidMount = function() { this.setState({ items, selected: "clothes" }) };

describe('test category component', () => {
	test('should have menu item elements', () => {
    		render(<Category />, { wrapper: Category });
 		 expect(screen.getByText('clothes')).toBeTruthy();
    });

	test('should return category name onCategorySelected', () => {
		const set = jest.fn();
		Category.prototype.componentDidUpdate = function(p, s){
			if(s.category !== this.state.category) set({  category: this.state.category })
		}
    	
        const{ container } = render(<Category />, { wrapper: Category } );

        	fireEvent.click(screen.getByText('tech'))
    		waitFor(() => {
    			expect(set).toHaveBeenCalledTimes(1);
				expect(set).toHaveBeenCalledWith('tech');
				expect(container.querySelector('.selected')).toBeTruthy();
    		});
    });
})



