import './bookcase.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faFeatherAlt, faCalendarPlus, faCalendarMinus } from '@fortawesome/free-solid-svg-icons'

function RowHistory({ title, author, dateIn, dateOut }) {
  return (
    <tr>
      <td width="30%"><FontAwesomeIcon icon={faBookmark} /> {title}</td>
      <td width="30%"><FontAwesomeIcon icon={faFeatherAlt} /> {author}</td>
      <td with="20%"><FontAwesomeIcon icon={faCalendarPlus} /> {dateIn}</td>
      <td with="20%"><FontAwesomeIcon icon={faCalendarMinus} /> {dateOut}</td>
    </tr>
  );
}

export default RowHistory;