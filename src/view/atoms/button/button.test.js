/**
 * Test case
 * 
 * @author - Faizal
 * @date - 31st July, 2023 
 */
// GENERIC IMPORT
import {render, screen} from '@testing-library/react';

// COMPONENT IMPORT
import Button from '.';

describe('button component test suit', () => {
    it('renders button label', () => {
        render(<Button label='Close' onClickHandler={() => true}/>);
        const buttonField = screen.getByText('Close');
        expect(buttonField).toBeInTheDocument();
    });
});