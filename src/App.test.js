import { render, screen } from '@testing-library/react';
import App from './App';

test('test is at route', () => {
 renderWithRouter(<App />);
 expect(screen.getByText(/list/i)).toBeInTheDocument();
});
