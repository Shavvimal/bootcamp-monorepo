import { screen, within } from '@testing-library/react';
import News from '../News';

describe('News', () => {
    let component;

    beforeEach(() => {
        render(<News />);
    })

    test("loads with no featured story", () => {
        const article = screen.queryByRole('article', { name: 'featured story'})
        expect(article).not.toBeInTheDocument();
    });

    test("changes featured story when a story headline is clicked", () => {
        const firstStory = screen.getAllByRole('listitem')[0];
        const firstHeadline = within(firstStory).getByRole('heading', { name: "headline" });
        const secondStory = screen.getAllByRole('listitem')[1];
        const secondHeadline = within(secondStory).getByRole('heading', { name: "headline" });
        
        userEvent.click(firstStory)
        const article = screen.getByRole('article', { name: 'featured story'})
        expect(article.textContent).toContain(firstHeadline.textContent);
    
        userEvent.click(secondStory)
        expect(article.textContent).toContain(secondHeadline.textContent);
    });
})