import './bookcase.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faFeatherAlt, faCalendarPlus } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@mantine/core';
import Parse from 'parse/dist/parse.min.js';
import moment from 'moment';
import 'moment/locale/fr';

moment().locale('fr');

function RowContent({ objectId, title, author, dateIn, recordid, onResponse }) {
  
  const updateRow = async function () {
    let bookCase = new Parse.Object('BookCase');
    bookCase.set('objectId', objectId);
    bookCase.set('recordid', recordid);
    bookCase.set('title', title);
    bookCase.set('author', author);
    bookCase.set('dateIn', dateIn);
    bookCase.set('dateOut', new Date());
    try {
      await bookCase.save();
      onResponse('updated');
    } catch (error) {
      console.log(`Error! ${error.message}`);
      // TODO Alert user!
    }
  };



  return (
    <tr>
      <td width="40%"><FontAwesomeIcon icon={faBookmark} /> {title}</td>
      <td width="40%"><FontAwesomeIcon icon={faFeatherAlt} /> {author}</td>
      <td width="20%"><FontAwesomeIcon icon={faCalendarPlus} /> {moment(dateIn).format("DD MMMM YYYY")}</td>
      <td width="10%">
        <Button 
          fullWidth 
          color="gray" 
          variant="outline"
          onClick={updateRow}
          >Supprimer
        </Button>
      </td>
    </tr>
  );
}

RowContent.defaultProps  = {
  onResponse: () => {}
}

RowContent.propTypes = {
  onResponse: PropTypes.func,
}

export default RowContent;