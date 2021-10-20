import './search-list.scss';

import PropTypes from 'prop-types';
import { useContext } from 'react';
import {BookcaseContext} from '../bookcase-context-provider/bookcase-context-provider';


function SearchList({ searchValue, searchFilter, searchReset }) {

  const { test } = useContext(BookcaseContext);

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
      {test}
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