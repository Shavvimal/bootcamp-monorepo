import { screen } from '@testing-library/react';
import ReaderCount from '.';

describe('ReaderCount', () => {

    beforeEach(() => {
        render(<ReaderCount />);
    });

    test("increases reader count when 'I\'ve read!' button is clicked", () => {
        const readButton = screen.getByRole('button', { name: 'Read story'});
        const initialReaderCount = screen.getByRole('figure').textContent;
        userEvent.click(readButton);
        const newReaderCount = screen.getByRole('figure').textContent;
        expect(parseInt(newReaderCount)).toBe(parseInt(initialReaderCount) + 1)
    })
});