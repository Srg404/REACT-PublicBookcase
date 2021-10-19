import './titles.scss';
import PropTypes from 'prop-types'

function Titles({ title, subTitle }) {
  return (
    <div className="title">
      <h1>
        <strong>
          <span>{title}</span>
        </strong>
        <span>{subTitle}</span>
      </h1>
    </div>
  );
}

Titles.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
}

export default Titles;