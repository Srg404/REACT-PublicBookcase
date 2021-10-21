import './loading.scss';
import PropTypes from 'prop-types';

function Loading({ status }) {
  if (status === 'error') return (
    <div className="loading">
      <div className="error">
        <i className="fa fa-exclamation-triangle"></i> Désolé une erreur c'est produite!
      </div>
    </div>
  );
  return (
    <div className="loading">
      <div className="waiting">
        <i className="fas fa-spinner"></i>
      </div>
    </div>
  );
}

Loading.defaultProps = {
  status: 'waiting'
}

Loading.propTypes = {
  status: PropTypes.string,
}

export default Loading;