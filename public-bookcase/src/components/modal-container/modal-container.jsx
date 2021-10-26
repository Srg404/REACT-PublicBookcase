import './modal-container.scss';

import { BookcaseContext } from '../bookcase-context-provider/bookcase-context-provider';
import { useEffect, useContext, useState } from 'react';
import { Modal } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faBook } from '@fortawesome/free-solid-svg-icons'
import Bookcase from '../bookcase/bookcase';

function ModalContainer() {

  const { active } = useContext(BookcaseContext);
  const [opened, setOpened] = useState(false);
  const { width } = useViewportSize();

  useEffect(() => {
    if (active.recordid) {
      setOpened(true)
    }
  }, [active]);

  return (
    <Modal
      hideCloseButton
      opened={opened}
      size={(width <= 720) ? '100%' : '80%'}
    >
      <header className="modal-header">
        <h1><FontAwesomeIcon icon={faBook} size="1x" /> <span>{active.name}</span></h1>
        <button
          onClick={() => setOpened(false)}
          aria-describedby="close modal"
        >
          <FontAwesomeIcon icon={faTimesCircle} size="2x" />
        </button>
      </header>
      <Bookcase recordid={active.recordid} />
    </Modal>
  );
}

export default ModalContainer;