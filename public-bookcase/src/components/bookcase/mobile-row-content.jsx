import './bookcase.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faFeatherAlt } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@mantine/core';
import Parse from 'parse/dist/parse.min.js';
import moment from 'moment';
import 'moment/locale/fr';

moment().locale('fr');

function MobileRowContent({ objectId, title, author, dateIn, recordid, onResponse }) {
  
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
      <div className="book">
      <div className="title-row">
        <h6><FontAwesomeIcon icon={faBookmark} /> Titre du livre :</h6>
        {title}
      </div>
      <div className="author-row">
        <h6><FontAwesomeIcon icon={faFeatherAlt} /> Auteur :</h6>
        {author}
      </div>
      <div className="remove-book">
        <Button 
          fullWidth 
          color="gray" 
          variant="outline"
          onClick={updateRow}
          >Supprimer
        </Button>
      </div>
    </div>
    
  );
}

MobileRowContent.defaultProps  = {
  onResponse: () => {}
}

MobileRowContent.propTypes = {
  onResponse: PropTypes.func,
}

export default MobileRowContent;