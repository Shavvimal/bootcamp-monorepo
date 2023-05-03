import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import News from '../News';

describe('News', () => {
    beforeEach(() => render(<News />, { wrapper: MemoryRouter }));

    test("loads with no featured story", () => {
        const article = screen.queryByRole('article', { name: 'featured story'})
        expect(article).not.toBeInTheDocument();
    });

    test('shows an image of newspapers', () => {
        const image = screen.queryByRole('img', { alt: 'newspapers'});
        expect(image).toBeInTheDocument();
    })
})