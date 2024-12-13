import React from 'react';
import PropTypes from 'prop-types';

const ResetButton = ({ onReset }) => {
  return (
    <button className="nav-button reset-button" onClick={onReset}>
      Reiniciar
    </button>
  );
};

ResetButton.propTypes = {
  onReset: PropTypes.func.isRequired,
};

export default ResetButton;
