import './bookcase.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faFeatherAlt } from '@fortawesome/free-solid-svg-icons'
import { Button, Input } from '@mantine/core';

function AddBook() {
  return (
    <tr className="tr-add">
      <td>
        <Input
          type="text"
          aria-describedby="Titre du livre"
          placeholder="Titre du livre"
          icon={<FontAwesomeIcon icon={faBookmark} />}
        />
      </td>
      <td>
        <Input
          type="text"
          aria-describedby="Auteur du livre"
          placeholder="Auteur du livre"
          icon={<FontAwesomeIcon icon={faFeatherAlt} />}
        />
      </td>
      <td></td>
      <td width="10"><Button fullWidth>Ajouter</Button></td>
    </tr>
  );
}

export default AddBook;