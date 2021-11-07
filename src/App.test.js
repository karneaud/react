import { screen } from '@testing-library/react';
import renderWithRouter from "./setupTests";
import App from './App';

describe('test app component' , () => {
	test('should be at /', () => {
 		renderWithRouter(<App />);
 		expect(screen.getByText(/list/i)).toBeInTheDocument();
	});
});
