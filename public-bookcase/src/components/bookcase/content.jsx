import './bookcase.scss';
import PropTypes from 'prop-types';
import { Table } from '@mantine/core';
import AddBook from './add-book';
import RowContent from './row-content';

function BookcaseContent({ data }) {
  
  const rowsJSX = data.map((element) => (
    <RowContent 
        key={element.title}
        title={element.title}
        author={element.author}
        dateIn={element.dateIn}
      />
  ));

  return (
          <Table>
            <thead>
              <tr>
                <th>Titre</th>
                <th>Auteur</th>
                <th>Date d'entrée</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <AddBook />
              {rowsJSX}
            </tbody>
          </Table>
  );
}

BookcaseContent.defaultValue = {
    data: []
}

BookcaseContent.propTypes = {
  data: PropTypes.array.isRequired
}

export default BookcaseContent;