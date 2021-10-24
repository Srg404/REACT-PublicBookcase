import './bookcase.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faFeatherAlt, faCalendarPlus, faCalendarMinus } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment';
import 'moment/locale/fr';

moment().locale('fr');

function RowHistory({ title, author, dateIn, dateOut }) {
  return (
    <tr>
      <td width="30%"><FontAwesomeIcon icon={faBookmark} /> {title}</td>
      <td width="30%"><FontAwesomeIcon icon={faFeatherAlt} /> {author}</td>
      <td with="20%"><FontAwesomeIcon icon={faCalendarPlus} /> {moment(dateIn).format("DD MMMM YYYY")}</td>
      <td with="20%"><FontAwesomeIcon icon={faCalendarMinus} /> {moment(dateOut).format("DD MMMM YYYY")}</td>
    </tr>
  );
}

export default RowHistory;