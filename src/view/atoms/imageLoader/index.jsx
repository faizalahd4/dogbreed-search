/**
 * Image Loader
 * 
 * @author - Faizal
 * @date - 31st July, 2023 
 */
// GENERIC IMPORT
import {useState} from 'react';

// STYLE IMPORT
import './styles.css';

const ImageLoader = (props) => {
    // DECLARE STATE
    const [isLoading, setLoading] = useState(true);

    // ONSUCCESS HIDE THE LOADER
    const handleImageLoad = () => {
        setLoading(false);
    };

    return (
        <>
            {isLoading && props.isImageAvailable && <div className="img-loader"></div>}
            <img
            src={props.src}
            alt={props.name}
            className={['rounded', props?.className].join(' ').trim()}
            width={props.width}
            onLoad={handleImageLoad}
            style={{ display: isLoading ? 'none' : 'block' }}/>
            {!props.isImageAvailable && <div className='no-img'><i class="fa-solid fa-dog"></i></div>}
        </>
    );
};

export default ImageLoader;
