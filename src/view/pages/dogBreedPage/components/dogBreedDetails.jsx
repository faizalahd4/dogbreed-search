/**
 * Dog breed card component
 * 
 * @author - Faizal
 * @date - 31st July, 2023 
 */
// GENERIC COMPONENT IMPORT
import {ImageLoader} from '../../../atoms';

// STYLE IMPORT
import '../styles.css';

const DogBreedDetails = (props) => {
  // DECLARE SELECTED DATA
  const selectedData = props.data;
  return (
      <div className='row'>
        <div className='col-1'>
          <ImageLoader src={selectedData.img} className='details-img' isImageAvailable={Boolean(selectedData?.reference_image_id)}/>
        </div>
        <div className='col-1'>
          <div className='dogbreedContent'>
              <h2 data-testid='title'>{selectedData.name}</h2>
              <p data-testid='details'>The {selectedData.breed_group} breed dog, originating from {selectedData.origin}, 
                  is {selectedData.temperament} suitable for {selectedData.bred_for}. 
                  With a lifespan of {selectedData.life_span}, their temperament is characterized by {selectedData.temperament}.
              </p>
              <h5>Height</h5>
              <div className='chip'>Imperial {selectedData.height.imperial}</div>
              <div className='chip'>Metric {selectedData.height.metric}</div>
              <h5>Weight</h5>
              <div className='chip'>Imperial {selectedData.weight.imperial}</div>
              <div className='chip'>Metric {selectedData.weight.metric}</div>
          </div>
        </div>
      </div>
  );
};

export default DogBreedDetails;