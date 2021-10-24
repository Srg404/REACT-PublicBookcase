// import './search-list.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Input } from '@mantine/core';
import PropTypes from 'prop-types';

function SearchList({ searchValue, searchFilter, searchReset }) {

  const rightSection = searchValue !== "" && (
    <FontAwesomeIcon 
      icon={faTimes} 
      onClick={searchReset}
    />
  )
  return (
    <div className="search">
      <Input
        type="search"
        className="form-search"
        id="search-list"
        aria-describedby="search Address"
        placeholder="Recherche par adresse"
        icon={<FontAwesomeIcon icon={faSearch} />}
        value={searchValue}
        onChange={searchFilter}
        rightSection={rightSection} 
      />
    </div>
  );
}

SearchList.defaultProps  = {
  searchFilter: () => {},
  searchReset: () => {}
}

SearchList.propTypes = {
  searchValue: PropTypes.string,
  searchFilter: PropTypes.func,
  searchReset: PropTypes.func
}

export default SearchList;