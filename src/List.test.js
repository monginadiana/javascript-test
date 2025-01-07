import { render, screen } from '@testing-library/react';
import List from './List';

test('Component List', () => {
        const people = ['john', 'bob', 'jane'];
        render(<List items={people} />)
        const itemlist = screen.getAllByRole('listitem')
        expect(itemlist).toHaveLength(people.length)

    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
});