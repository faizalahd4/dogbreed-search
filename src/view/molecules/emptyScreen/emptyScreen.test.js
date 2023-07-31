/**
 * Test case
 * 
 * @author - Faizal
 * @date - 31st July, 2023 
 */
// GENERIC IMPORT
import {render, screen} from '@testing-library/react';

// COMPONENT IMPORT
import EmptyScreen from '.';

describe('empty screen test suit', () => {
    it('renders title, subtitle and icon', () => {
        render(<EmptyScreen title='No search result found' subtitle='Please try different search words' icon={<i data-testid='empty-icon' className="fa-solid fa-magnifying-glass"></i>}/>);
        const titleField = screen.getByText('No search result found');
        const subtitleField = screen.getByText('Please try different search words');
        const iconField = screen.getByTestId('empty-icon');
        expect(titleField).toBeInTheDocument();
        expect(subtitleField).toBeInTheDocument();
        expect(iconField).toBeInTheDocument();
    });
});