import './bookcase.scss';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Tabs, Tab } from '@mantine/core';
import BookcaseContent from './content';
import BookcaseHistory from './history';
import Parse from 'parse/dist/parse.min.js';

function Bookcase({ recordid }) {

  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  async function fetchBookCase(recordid) {
    const query = new Parse.Query('BookCase');
    query.equalTo('recordid', recordid);
    let bookCase = await query.find();
    setData(bookCase);
    
  }

  const myData = data.map((item) => {
    return {
      id : item.id,
      recordid: item.get('recordid'),
      title: item.get('title'),
      author: item.get('author'),
      dateIn: item.get('dateIn'),
      dateOut: item.get('dateOut')
    }
  });
  
  console.log(myData);

  useEffect(() => {
    fetchBookCase(recordid);
  },[recordid])

  const OnResponse = () => {
    fetchBookCase(recordid);
  }

  return (
    <div className="bookcase">
      <Tabs active={activeTab} onTabChange={setActiveTab}>
        <Tab label="Dans la boite">
          <BookcaseContent data={myData} recordid={recordid} onResponse={OnResponse} />
        </Tab>
        <Tab label="Historique de la boite">
          <BookcaseHistory data={myData} />
        </Tab>
      </Tabs>
    </div>
  );
}

Bookcase.propTypes = {
  recordid: PropTypes.string
}

export default Bookcase;