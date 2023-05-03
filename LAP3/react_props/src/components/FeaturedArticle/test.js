import { screen } from '@testing-library/react';
import FeaturedArticle from '.';

describe('FeaturedArticle', () => {
    let stubStory;

    beforeEach(() => {
        stubStory = { id: 1234, headline: 'Test Headline', snippet: 'Once upon a time...' }
        render(<FeaturedArticle story={stubStory}/>);
    });

    test("renders given story", () => {
        const feature = screen.getByLabelText('featured story');
        expect(feature.textContent).toContain(stubStory.headline);
    });
});