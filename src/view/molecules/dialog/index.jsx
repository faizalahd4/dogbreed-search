/**
 * Dialog
 * 
 * @author - Faizal
 * @date - 31st July, 2023 
 */
// GENERIC COMPONENT IMPORT
import {Button} from '../../atoms';

// STYLE IMPORT
import './styles.css';

const Dialog = (props) => {
    // FINDING DEFAULT SIZE
    const size = props?.size || 'large';

    // SIZE MAP
    const dialogMap = {
        small: 'small',
        large: ''
    }
    return (
        <>
            <div className='dialog-overlay'/>
            <div className={['dialog', dialogMap[size]].join(' ').trim()}>
                <div className='title-container'>
                    <h1>{props.title}</h1>
                </div>
                <div className='content-container'>
                    {props.children}
                </div>
                <div className='btn-container'>
                    <Button label='Close' onClickHandler={props.onClose}/>
                </div>
            </div>
        </>
    );
};

export default Dialog;
