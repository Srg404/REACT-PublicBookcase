import './bookcase.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faFeatherAlt } from '@fortawesome/free-solid-svg-icons'
import { Button, TextInput, LoadingOverlay } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { useState } from 'react';
import Parse from 'parse/dist/parse.min.js';

function AddBook({ recordid, onResponse }) {

  const [response, setResponse] = useState(null);

  const form = useForm({
    initialValues: {
      title: '',
      author: '',
    },
    validationRules: {
      title: (value) => value.trim().length >= 2,
      author: (value) => value.trim().length >= 2,
    },
  });


  async function addBook() {
    try {
      const BookCase = new Parse.Object('BookCase');

      BookCase.set('recordid', recordid);
      BookCase.set('title', form.values.title);
      BookCase.set('author', form.values.author);
      BookCase.set('dateIn', new Date());
      BookCase.set('dateOut', null);

      await BookCase.save();
      setResponse('saved');
      onResponse('saved');
      form.values.title = '';
      form.values.author = '';
    } catch (error) {
      console.log(`Error! ${error.message}`);
      // TODO Alert user!
      setResponse('error');
    }
  }

  const handleSubmit = ({title, author}) => {
    addBook();
    setResponse('waiting');
  }

  return (<>
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <div className="row-add">
          <LoadingOverlay visible={(response === 'waiting')} />
          <div className="input-wrapper">
            <TextInput 
              type="text"
              aria-describedby="Titre du livre"
              placeholder="Titre du livre"
              icon={<FontAwesomeIcon icon={faBookmark} />}
 
              required
              label="Titre du livre"
              error={form.errors.title && 'Ce champ est obligatoire'}
              value={form.values.title}
              onChange={(event) => form.setFieldValue('title', event.currentTarget.value)}

            />
          </div>
          <div className="input-wrapper">
            <TextInput 
              type="text"
              aria-describedby="Auteur du livre"
              placeholder="Auteur du livre"
              icon={<FontAwesomeIcon icon={faFeatherAlt} />}

              required
              label="Nom de l'auteur"
              error={form.errors.author && 'Ce champ est obligatoire'}
              value={form.values.author}
              onChange={(event) => form.setFieldValue('author', event.currentTarget.value)}

            />
          </div>
          <div className="button-wrapper">
            <Button
              fullWidth
              type="submit"
            >Ajouter</Button>
          </div>
        </div>
    </form>
  </>
  );
}

AddBook.defaultProps  = {
  onResponse: () => {}
}

AddBook.propTypes = {
  recordid: PropTypes.string,
  onResponse: PropTypes.func,
}

export default AddBook;