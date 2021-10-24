import './item-list.scss';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { BookcaseContext } from '../../bookcase-context-provider/bookcase-context-provider';

function ItemList({ name, recordid, onHover }) {

  const { setContextActive } = useContext(BookcaseContext);
  function handleClick() {
    setContextActive({
      recordid: recordid,
      name: name
    });
  }

  return (
    <li>
      <div 
        className="element-list"
        >
        <i className="fas fa-book"></i>
        <span>{name}</span>
        <button 
          onClick={handleClick}
          onMouseOver={() => onHover(recordid) }
          onMouseOut={() => onHover(null) }
          title="Voir"
          >Voir</button>
      </div>
    </li>
  );
}

ItemList.defaultProps = {
  onHover: () => {}
}

ItemList.propTypes = {
  name: PropTypes.string.isRequired,
  recordid: PropTypes.string.isRequired,
  onHover: PropTypes.func
}

export default ItemList;