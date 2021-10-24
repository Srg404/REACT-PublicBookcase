import './bookcase.scss';
import PropTypes from 'prop-types';
import { Table } from '@mantine/core';
import RowHistory from './row-history';

function BookcaseHistory({ data }) {
  
  const rows = data.map((element) => {
    if (element.dateOut) {
      return (
        <RowHistory 
          key={element.id}
          title={element.title}
          author={element.author}
          dateIn={element.dateIn}
          dateOut={element.dateOut}
          />)
    } else {
      return false
  }
  }).reverse();

  return (
    <Table>
    <thead>
      <tr>
        <th>Titre</th>
        <th>Auteur</th>
        <th>Date d'entrée</th>
        <th>Date de sortie</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </Table>
  );
}

BookcaseHistory.defaultValue = {
    data: []
}

BookcaseHistory.propTypes = {
  data: PropTypes.array.isRequired
}

export default BookcaseHistory;