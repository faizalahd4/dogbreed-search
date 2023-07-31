/**
 * Test case
 * 
 * @author - Faizal
 * @date - 31st July, 2023 
 */
// GENERIC IMPORT
import {render, screen} from '@testing-library/react';

// COMPONENT IMPORT
import Alert from '.';

describe('alert component test suit', () => {
    it('renders alert', () => {
        render(<Alert message='Please try again later' type='error' />);
        const field = screen.getByText('Please try again later');
        expect(field).toBeInTheDocument();
    });
});