/**
 * Test case
 * 
 * @author - Faizal
 * @date - 31st July, 2023 
 */
// GENERIC IMPORT
import {render, screen} from '@testing-library/react';

// COMPONENT IMPORT
import SearchField from '.';

describe('search field component test suit', () => {
    it('renders search field with logo', () => {
        render(<SearchField showlogo placeholder='Search by Dog breed name' onChangeHandler={() => true}/>);

        const searchField = screen.getByPlaceholderText('Search by Dog breed name');
        expect(searchField).toBeInTheDocument();

        const logoElement = screen.getByTestId('logo');
        expect(logoElement).toBeInTheDocument();
    });
    it('renders search field without logo', () => {
        render(<SearchField placeholder='Search by Dog breed name' onChangeHandler={() => true}/>);
        expect(screen.queryByTestId('logo')).not.toBeInTheDocument();
    });
});