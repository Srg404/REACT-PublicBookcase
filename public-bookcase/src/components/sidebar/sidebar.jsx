import './sidebar.scss';

import PropTypes from 'prop-types'

function Sidebar({ status, data }) {

  if (status === 'waiting') return (
    <div className="sidebar">
      <p>Chargement...</p>
    </div>
  );

  if (status === 'error') return (
    <div className="sidebar">
      <p>Une erreur malencontrueuse c'est produit veuillez recharger la page ! </p>
    </div>
  );

  return (
    <div className="sidebar">
      <p>{status}</p>
    </div>
  )
}

Sidebar.defaultProps = {
  data: []
}

Sidebar.propTypes = {
  status: PropTypes.string.isRequired,
  data: PropTypes.array
}

export default Sidebar;