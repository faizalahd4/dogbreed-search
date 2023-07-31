/**
 * Alert
 * 
 * @author - Faizal
 * @date - 31st July, 2023 
 */
// STYLE IMPORT
import './styles.css';

const Alert = (props) => {
    const alertMap = {
        error: 'error-container',
        succcess: 'succcess-container',
        warning: 'warning-container',
        info: 'succcess-container',
    }
    return (
        <div className={['alert', alertMap[props.type]].join(' ').trim()}>
            {props.message}
        </div>
    );
};

export default Alert;
