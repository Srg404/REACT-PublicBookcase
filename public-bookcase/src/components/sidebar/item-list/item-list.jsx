import './item-list.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@mantine/core';
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
        className="item-list"
        >
        <Button 
          onClick={handleClick}
          onMouseOver={() => onHover(recordid) }
          onMouseOut={() => onHover(null) }
          title="Voir"
          leftIcon={<FontAwesomeIcon icon={faBook} />}
          fullWidth
          >{name}</Button>
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