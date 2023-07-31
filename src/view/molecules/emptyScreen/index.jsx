/**
 * Empty screen
 * 
 * @author - Faizal
 * @date - 31st July, 2023 
 */
// STYLE IMPORT
import './styles.css';

const EmptyScreen = (props) => (
    <div className='empty-screen-container'>
        {props.icon}
        <div className='title'>{props.title}</div>
        <div className='sub-title'>{props.subtitle}</div>
    </div>
);

export default EmptyScreen;
