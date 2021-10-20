import './sidebar.scss';

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import ItemList from '../item-list/item-list';
import SearchList from '../search-list/search-list';

function Sidebar({ status, data }) {
  
  const [searchValue, setSearchValue] = useState(''); 
  const [resultData, setResultData] = useState(data); 
  
  useEffect(() => {
    setResultData(data);
  }, [data]);

  const ListJSX = resultData.map(
    (bookCase) => (
      <ItemList
        key={bookCase.recordid}
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
        setResultData(results);
      } else {
        setResultData(data);
      }
      setSearchValue(testValue);
  }

  const searchReset = () => {
    setResultData(data);
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