import './bookcase.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faFeatherAlt, faCalendarPlus } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@mantine/core';

function RowContent({ id, title, author, dateIn }) {
  return (
    <tr>
      <td width="40%"><FontAwesomeIcon icon={faBookmark} /> {title}</td>
      <td width="40%"><FontAwesomeIcon icon={faFeatherAlt} /> {author}</td>
      <td width="20%"><FontAwesomeIcon icon={faCalendarPlus} /> {dateIn}</td>
      <td width="10%"><Button fullWidth color="gray" variant="outline">Supprimer</Button></td>
    </tr>
  );
}

export default RowContent;