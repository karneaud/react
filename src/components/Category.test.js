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
    	const testCategorySelected = jest.fn(),
              { container } = render(<Category onCategorySelected={ testCategorySelected } />, { wrapper: Category } );
        	waitFor(async () => {
    			await fireEvent.click(screen.getByText('tech'));
    			expect(testCategorySelected).toHaveBeenCalledTimes(1);
				expect(testCategorySelected).toHaveBeenCalledWith('tech');
				expect(container.querySelector('.selected')).toBeTruthy();
    		});
    });
})



