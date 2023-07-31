/**
 * Dog breed page
 * 
 * @author - Faizal
 * @date - 31st July, 2023 
 */
// GENERIC IMPORT
import {useState} from 'react';

// GENERIC COMPONENT IMPORT
import {SearchField} from '../../atoms';
import {EmptyScreen} from '../../molecules';
import {callGetApi} from '../../../api/apiCall';

// SELF COMPONENT IMPORT
import DogBreedList from './components/dogBreedList';

// UTILS IMPORT
import {debounce} from '../../../utils/helper';
import * as CONSTANT from '../../../utils/constants';

// SELF COMPONENT IMPORT
import {useDogBreedErrorAlertModal} from './useDogBreedModal';
import {sortByName, sortByHeight, sortByLifeSpan} from './helper';

// STYLE IMPORT
import './styles.css';

const DogBreedPage = () => {
    // DECLARE STATE
    const [breedList, setBreedList] = useState([]);
    const [sortBy, setSortBy] = useState('NAME');
    const dogBreedErrorAlertModal = useDogBreedErrorAlertModal();
    
    // ON SEARCH API CALL
    const onSearchDogBreed = (keyword) => {
        callGetApi(CONSTANT.SEARCH_DOG_BREED_API.concat(keyword)).then(response => setBreedList(response)).catch(_ => dogBreedErrorAlertModal.show());
    }

    const changeSort = () => {
        let sortedData = [];
        switch (sortBy) {
            case 'HEIGHT': {
                sortedData = sortByHeight(breedList);
                break;
            }
            case 'LIFE_SPAN': {
                sortedData = sortByLifeSpan(breedList);
                break;
            }
            default: {
                sortedData = sortByName(breedList);
            }
        }
        return sortedData;
    }

    // DEBOUCE DECLARE BY 1 SECOND
    const debouncedSearchApi = debounce(onSearchDogBreed, 1000);

    return (
        <>
            <div className='header'>
                <SearchField showlogo placeholder='Search by Dog breed name' onChangeHandler={(event) => debouncedSearchApi(event.target.value.trim())}/>
                <select onChange={(event) => setSortBy(event.target.value)} className='select-field'>
                    <option value='NAME'>Name</option>
                    <option value='HEIGHT'>Height</option>
                    <option value='LIFE_SPAN'>Life Span</option>
                </select>
            </div>
            {breedList.length ? 
                <DogBreedList data={changeSort(breedList)}/> 
                : 
                <EmptyScreen title='No search result found' subtitle='Please try different search words' icon={<i className="fa-solid fa-magnifying-glass"></i>}/>
            }
            {dogBreedErrorAlertModal.child}
        </>
    );
};

export default DogBreedPage;
