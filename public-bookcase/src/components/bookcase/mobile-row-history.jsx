import './bookcase.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faFeatherAlt, faSignInAlt, faSignOutAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment';
import 'moment/locale/fr';

moment().locale('fr');

function MobileRowHistory({ title, author, dateIn, dateOut }) {
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
      <div>
        <h6><FontAwesomeIcon icon={faCalendarAlt} /> Date d'entrée et de sortie :</h6>
        <div className="dates">
          <div className="date"><FontAwesomeIcon icon={faSignInAlt} /> {moment(dateIn).format("DD/MM/YY")}</div>
          <div className="date"><FontAwesomeIcon icon={faSignOutAlt} /> {moment(dateOut).format("DD/MM/YY")}</div>
        </div>
      </div>
    </div>
  );
}

export default MobileRowHistory;