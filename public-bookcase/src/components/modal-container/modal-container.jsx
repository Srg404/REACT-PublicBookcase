// import './modal-container.scss';

import { BookcaseContext } from '../bookcase-context-provider/bookcase-context-provider';
import { useEffect, useContext, useState } from 'react';
import { Modal } from '@mantine/core';

function ModalContainer() {

  const { active } = useContext(BookcaseContext);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (active.recordid) {
      console.log(`💥 Ceci est un clic sur ${active.name} (${active.recordid}) 💥`);
      setOpened(true)
    }
  }, [active]);

  return (
    <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={active.name}
        size="full"
      >
      
    </Modal>
  );
}

export default ModalContainer;