import './bookcase.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Tabs, Tab } from '@mantine/core';
import BookcaseContent from './content';
import BookcaseHistory from './history';

function Bookcase({ recordid }) {

  const [activeTab, setActiveTab] = useState(0);

  const elementsIn = [
    { title: 'My little Pony', author: 'John Doe', dateIn: '10/10/20' },
    { title: 'My little', author: 'John Doe', dateIn: '10/10/20' },
    { title: 'My Pony', author: 'John Doe', dateIn: '10/10/20' },
    { title: 'My little Dog', author: 'John Doe', dateIn: '10/10/20' },
    { title: 'My little Cat', author: 'John Doe', dateIn: '10/10/20' },
    { title: 'My little Horse', author: 'John Doe', dateIn: '10/10/20' },
    { title: 'My little Fish', author: 'John Doe', dateIn: '10/10/20' },
    { title: 'My little Chicken', author: 'John Doe', dateIn: '10/10/20' },
    { title: 'My little Dino', author: 'John Doe', dateIn: '10/10/20' },
    { title: 'My little Frog', author: 'John Doe', dateIn: '10/10/20' },
    { title: 'My little Bird', author: 'John Doe', dateIn: '10/10/20' },
    { title: 'My little Whale', author: 'John Doe', dateIn: '10/10/20' },
    { title: 'My little Rabbit', author: 'John Doe', dateIn: '10/10/20' },
    { title: 'My little Octopus', author: 'John Doe', dateIn: '10/10/20' },
    { title: 'My little Pig', author: 'John Doe', dateIn: '10/10/20' },
    { title: 'My little Cow', author: 'John Doe', dateIn: '10/10/20' },
    { title: 'My little Bull', author: 'John Doe', dateIn: '10/10/20' },
    { title: 'My little Roster', author: 'John Doe', dateIn: '10/10/20' }
  ];

  const elementsOut = [
    { title: 'My little Pony', author: 'John Doe', dateIn: '10/10/20', dateOut: '10/10/20' },
    { title: 'My little', author: 'John Doe', dateIn: '10/10/20', dateOut: '10/10/20' },
    { title: 'My Pony', author: 'John Doe', dateIn: '10/10/20', dateOut: '10/10/20' },
    { title: 'My little Dog', author: 'John Doe', dateIn: '10/10/20', dateOut: '10/10/20' },
    { title: 'My little Cat', author: 'John Doe', dateIn: '10/10/20', dateOut: '10/10/20' },
    { title: 'My little Horse', author: 'John Doe', dateIn: '10/10/20', dateOut: '10/10/20' },
    { title: 'My little Fish', author: 'John Doe', dateIn: '10/10/20', dateOut: '10/10/20' },
    { title: 'My little Chicken', author: 'John Doe', dateIn: '10/10/20', dateOut: '10/10/20' }
  ];

  return (
    <div className="bookcase">
      <Tabs active={activeTab} onTabChange={setActiveTab}>
        <Tab label="Dans la boite">
          <BookcaseContent data={elementsIn}/>
        </Tab>
        <Tab label="Historique de la boite">
          <BookcaseHistory data={elementsOut}/>
        </Tab>
      </Tabs>
    </div>
  );
}

Bookcase.propTypes = {
  recordid: PropTypes.string.isRequired
}

export default Bookcase;