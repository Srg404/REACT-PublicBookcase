import './bookcase.scss';
import PropTypes from 'prop-types';
import MobileRowHistory from './mobile-row-history';

function MobileBookcaseHistory({ data }) {
  
  const rows = data.map((element) => {
    if (element.dateOut) {
      return (
        <MobileRowHistory 
          key={element.id}
          title={element.title}
          author={element.author}
          dateIn={element.dateIn}
          dateOut={element.dateOut}
          />)
    } else {
      return false
  }
  }).reverse();

  return (
    <>
      {rows}
    </>
  );
}

MobileBookcaseHistory.defaultValue = {
    data: []
}

MobileBookcaseHistory.propTypes = {
  data: PropTypes.array.isRequired
}

export default MobileBookcaseHistory;