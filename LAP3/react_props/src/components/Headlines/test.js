import { screen } from '@testing-library/react';
import Headlines from '.';

describe('Headlines', () => {
    const stubStories = [
        { id: 2468, headline: 'Test Story 1', snippet: 'Testing, testing'},
        { id: 4151, headline: 'Test Story 2', snippet: '1, 2, 3'}
    ]
    const stubHandleSelect = jest.fn()

    beforeEach(() => {
        render(<Headlines stories={stubStories} handleSelect={stubHandleSelect}/>);
    });

    test("renders story headlines", () => {
        const headlines = screen.getByRole('list');
        expect(headlines.textContent).toContain(stubStories[0].headline);
    });

    test("it triggers handleSelect prop when a story headline is clicked", () => {
        const firstStory = screen.getAllByRole('listitem')[0];
        userEvent.click(firstStory)
        expect(stubHandleSelect.mock.calls.length).toBe(1);
    })

});