import './modal.scss';

import { BookcaseContext } from '../bookcase-context-provider/bookcase-context-provider';
import { useEffect, useContext } from 'react';

function Modal() {

  const { active } = useContext(BookcaseContext);

  useEffect(() => {
    if (active.recordid) {
      console.log(`💥 Ceci est un clic sur ${active.name} (${active.recordid}) 💥`);
    }
  }, [active]);

  return (
    <>
    </>
  );
}

export default Modal;