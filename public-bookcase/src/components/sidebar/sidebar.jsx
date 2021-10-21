import './sidebar.scss';

import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types'
import ItemList from '../item-list/item-list';
import SearchList from '../search-list/search-list';
import { BookcaseContext } from '../bookcase-context-provider/bookcase-context-provider';

function Sidebar({ status, data }) {

  const [searchValue, setSearchValue] = useState('');
  const { result, setContextResult } = useContext(BookcaseContext);

  useEffect(() => {
    setContextResult(data);
    // TODO : find solution for resolve this eslint alert
    // eslint-disable-next-line
  }, [data]);

  const ListJSX = result.map(
    (bookCase) => (
      <ItemList
        key={bookCase.recordid}
        id={bookCase.recordid}
        name={bookCase.fields.name}
      />
    )
  );

  const searchFilter = (e) => {
    const testValue = e.target.value;
    if (testValue !== '') {
      const results = data.filter((item) => {
        return item.fields.name.toLowerCase().includes(testValue.toLowerCase());
      });
      setContextResult(results);
    } else {
      setContextResult(data);
    }
    setSearchValue(testValue);
  }

  const searchReset = () => {
    setContextResult(data);
    setSearchValue('');
  }

  if (status === 'waiting') return (
    <div className="sidebar">
      <p>Chargement...</p>
    </div>
  );

  if (status === 'error') return (
    <div className="sidebar">
      <p>Une erreur malencontrueuse c'est produit veuillez recharger la page ! </p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="list-bookcase">
        <SearchList
          searchValue={searchValue}
          searchFilter={searchFilter}
          searchReset={searchReset}
        />
        <ul >
          {ListJSX}
        </ul>
      </div>
    </div>
  )
}

Sidebar.defaultProps = {
  data: []
}

Sidebar.propTypes = {
  status: PropTypes.string.isRequired,
  data: PropTypes.array
}

export default Sidebar;