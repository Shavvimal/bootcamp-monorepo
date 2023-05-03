import { screen } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
    test('it shows the copyright logo and futureproof name', () => {
        render(<Footer />);
        const content = screen.queryByText(/© futureproof/i);
        expect(content).toBeInTheDocument();
    })
})