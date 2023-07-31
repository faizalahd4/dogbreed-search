/**
 * Test case
 * 
 * @author - Faizal
 * @date - 31st July, 2023 
 */
// GENERIC IMPORT
import {render, screen} from '@testing-library/react';

// COMPONENT IMPORT
import Dialog from '.';

describe('dialog test suit', () => {
    it('renders title', () => {
        render(<Dialog title='Dog breed' onClose={close}>Open dialog</Dialog>);
        const field = screen.getByText('Dog breed');
        expect(field).toBeInTheDocument();
    });
    
    it('renders content', () => {
        render(<Dialog title='Dog breed' onClose={close}>Open dialog</Dialog>);
        const field = screen.getByText('Open dialog');
        expect(field).toBeInTheDocument();
    });
});