/**
 * Dog breed list component
 * 
 * @author - Faizal
 * @date - 31st July, 2023 
 */
// GENERIC IMPORT
import {useState, useEffect} from 'react';

// GENERIC COMPONENT IMPORT
import * as CONSTANT from '../../../../utils/constants';
import {callGetApi} from '../../../../api/apiCall';

// SELF COMPONENT IMPORT
import DogBreedCard from './dogBreedCard';
import {useDogBreedModal} from '../useDogBreedModal';

// STYLE IMPORT
import '../styles.css';

const DogBreedList = (props) => {
    // DECLARE STATE 
    const [breedImageMap, setBreedImageMap] = useState({});
    const dogBreedModal = useDogBreedModal();

    // FETCH BREED LIST FOR IMAGES
    const fetchBreedsImageList = () => {
        callGetApi(CONSTANT.DOG_BREED_LIST_API).then(data => {
            const imageMap = data.reduce((acc, currentValue) => ({ ...acc, [currentValue.id]: currentValue.image.url}), {});
            setBreedImageMap(imageMap);
        });
    }

    useEffect(() => fetchBreedsImageList(), [])

    return (
        <div className='breed-list'>
            {props.data.map(item => (
                <DogBreedCard 
                    key={item.id} 
                    details={item} 
                    img={breedImageMap[item.id]} 
                    onOpenDetails={() => dogBreedModal.show({...item, img: breedImageMap[item.id]})}
                />
            ))}
            {dogBreedModal.child}
        </div>
    );
};

export default DogBreedList;
