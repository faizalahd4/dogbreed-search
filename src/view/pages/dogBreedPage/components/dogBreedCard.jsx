/**
 * Dog breed card component
 * 
 * @author - Faizal
 * @date - 31st July, 2023 
 */
// GENERIC COMPONENT IMPORT
import {ImageLoader} from '../../../atoms';

// UTILS IMPORT
import {truncateInfo} from '../../../../utils/helper';

// STYLE IMPORT
import '../styles.css';

const DogBreedCard = (props) => (
    <div className='dogbreedCard' onClick={props.onOpenDetails}>
        <div className='cover'/>
        <ImageLoader src={props.img} isImageAvailable={Boolean(props.details?.reference_image_id)}/>
        <div className='title' data-testid='card-title'>{props.details.name}</div>
        <div className='info' data-testid='card-info'>{truncateInfo(props.details.bred_for, 50)}</div>
        <div className='info'><strong>Life span: </strong>{props.details.life_span}</div>
    </div>
);

export default DogBreedCard;
