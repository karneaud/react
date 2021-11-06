import { render, screen } from '@testing-library/react';
import List from './List';

test('test list component rendered', () => {
 render(<List />);
 expect(screen.getByText('List')).toBeInTheDocument();
});
