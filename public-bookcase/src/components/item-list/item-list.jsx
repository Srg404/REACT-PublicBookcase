import './item-list.scss';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { BookcaseContext } from '../bookcase-context-provider/bookcase-context-provider';

function ItemList({ name, id }) {

  const { setContextActive } = useContext(BookcaseContext);
  function handleClick() {
    setContextActive(id);
  }

  return (
    <li>
      <div className="element-list">
        <i className="fas fa-book"></i>
        <span>{name}</span>
        <button 
          onClick={handleClick}
          title="Voir"
          >Voir</button>
      </div>
    </li>
  );
}

ItemList.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default ItemList;