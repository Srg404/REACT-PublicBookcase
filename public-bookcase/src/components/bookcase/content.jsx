import './bookcase.scss';
import PropTypes from 'prop-types';
import { Table } from '@mantine/core';
import AddBook from './add-book';
import RowContent from './row-content';


function BookcaseContent({ data, recordid, onResponse }) {

  const rowsJSX = data.map((element) => {
    if (!element.dateOut) {
      return (<RowContent
        key={element.id}
        objectId={element.id}
        recordid={element.recordid}
        title={element.title}
        author={element.author}
        dateIn={element.dateIn}
        onResponse={onResponse}
      />)
      } else {
        return false
    }
  }).reverse();

  return (
    <>
      <AddBook recordid={recordid} onResponse={onResponse}/>
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
          {rowsJSX}
        </tbody>
      </Table>
    </>
  );
}

BookcaseContent.defaultProps  = {
  data: [],
  onResponse: () => {}
}

BookcaseContent.propTypes = {
  data: PropTypes.array.isRequired,
  recordid: PropTypes.string.isRequired,
  onResponse: PropTypes.func
}

export default BookcaseContent;