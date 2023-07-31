/**
 * Test cases
 * 
 * @author - Faizal
 * @date - 31st July, 2023 
 */
import { render, screen } from '@testing-library/react';
import DogBreedPage from '.';
import DogBreedList from './components/dogBreedList';
import DogBreedCard from './components/dogBreedCard';
import DogBreedDetails from './components/dogBreedDetails';
import {mockData} from './data/mock';

describe('dog breed page test suit', () => {
    it('renders search text field', () => {
        render(<DogBreedPage />);
        const searchField = screen.getByPlaceholderText('Search by Dog breed name');
        expect(searchField).toBeInTheDocument();
    });
    
    it('renders logo', () => {
        render(<DogBreedPage />);
        const logoElement = screen.getByTestId('logo');
        expect(logoElement).toBeInTheDocument();
    });
    
    it('renders dog breed details', () => {
        render(<DogBreedDetails data={mockData[0]}/>);
        const titleElement = screen.getByTestId('title');
        const detailsElement = screen.getByTestId('details');
        expect(titleElement).toBeInTheDocument();
        expect(detailsElement).toBeInTheDocument();
    });
    
    it('renders dog breed card', () => {
        render(<DogBreedCard details={mockData[0]} onOpenDetails={() => true}/>);
        const cardTitleElement = screen.getByTestId('card-title');
        const cardInfoElement = screen.getByTestId('card-info');
        expect(cardTitleElement).toBeInTheDocument();
        expect(cardInfoElement).toBeInTheDocument();
    });
    
    it('renders dog breed list', () => {
        render(<DogBreedList data={mockData}/> );
        const cardTitleElement = screen.queryAllByTestId('card-title');
        const cardInfoElement = screen.queryAllByTestId('card-info');
        expect(cardTitleElement[0]).toBeInTheDocument();
        expect(cardInfoElement[0]).toBeInTheDocument();
    });

    it('renders inital screen', () => {
        render(<DogBreedPage />);
        const titleElement = screen.getByText('No search result found');
        const subtitleElement = screen.getByText('Please try different search words');
        expect(titleElement).toBeInTheDocument();
        expect(subtitleElement).toBeInTheDocument();
    });
});