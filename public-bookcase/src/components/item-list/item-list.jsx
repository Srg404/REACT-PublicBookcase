import './item-list.scss';
import PropTypes from 'prop-types';

function ItemList({ name }) {
  return (
    <li>
      <div className="element-list">
        <i className="fas fa-book"></i>
        <span>{name}</span>
        <button title="Voir">Voir</button>
      </div>
    </li>
  );
}

ItemList.propTypes = {
  name: PropTypes.string.isRequired
}

export default ItemList;