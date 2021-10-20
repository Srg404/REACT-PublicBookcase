import './search-list.scss';
import PropTypes from 'prop-types';

function SearchList({ searchValue, searchFilter, searchReset }) {
  return (
    <div className="search">
      <input
        type="search"
        className="form-search"
        id="search-list"
        aria-describedby="search Address"
        placeholder="Recherche par adresse"
        value={searchValue}
        onChange={searchFilter}
      />
      <button
        className="reset"
        onClick={searchReset}
      >
        <i className="fas fa-times"></i>
        <span>Effacer</span>
      </button>
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