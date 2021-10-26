import './bookcase.scss';
import PropTypes from 'prop-types';
import MobileRowContent from './mobile-row-content';

function MobileBookcaseContent({ data, recordid, onResponse }) {

  const rowsJSX = data.map((element) => {
    if (!element.dateOut) {
      return (<MobileRowContent
        key={element.id}
        objectId={element.id}
        recordid={element.recordid}
        title={element.title}
        author={element.author}
        dateIn={element.dateIn}
        onResponse={onResponse}
      />)
      } else {
        return false
    }
  }).reverse();

  return (
    <>
    {rowsJSX}
    </>
  );
}

MobileBookcaseContent.defaultProps  = {
  data: [],
  onResponse: () => {}
}

MobileBookcaseContent.propTypes = {
  data: PropTypes.array.isRequired,
  recordid: PropTypes.string.isRequired,
  onResponse: PropTypes.func
}

export default MobileBookcaseContent;