import React from 'react';
import PropTypes from 'prop-types';

const Congrats = ({ success }) => {
  const renderMessage = () => {
    if (success) {
      return (
        <span data-test="congrats-message" className="alert alert-success">
          Congratulations! you guessed the word
        </span>
      );
    }
  }

  return (
    <div data-test="component-congrats">
      {renderMessage()}
    </div>
  );
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
}

export default Congrats;