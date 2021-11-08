import { render, screen, container } from '@testing-library/react';
import Category from './Category';

const data = [ "tech" , "clothes"];


describe('test category component', () => {
	test('should be a category component with no menu items', () => {
 		render(<Category items={ [] } />);
 		expect(screen.getByText('No Data')).toBeInTheDocument();
	});

	test('should have menu item elements', () => {
    	  render(<Category items={ data } />);
 		 expect(screen.getByText('clothes')).toBeTruthy();
    });
})



