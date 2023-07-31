/**
 * Search Field
 * 
 * @author - Faizal
 * @date - 31st July, 2023 
 */
// STYLE IMPORT
import './styles.css';

const SearchField = (props) => (
    <div className='search-field-container'>
        {props.showlogo && <div className='logo' data-testid="logo">Dog Breed</div>}
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" data-testid='search-field' placeholder={props.placeholder} className='search-field' onChange={props.onChangeHandler}/>
    </div>
);

export default SearchField;