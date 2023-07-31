/**
 * Button
 * 
 * @author - Faizal
 * @date - 31st July, 2023 
 */
// STYLE IMPORT
import './styles.css';

const Button = (props) => (
    <input type='button' value={props.label} onClick={props.onClickHandler} className='primary-btn'/>
);

export default Button;
