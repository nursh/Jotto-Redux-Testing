import React from 'react';

export default ({ success }) => {
  const renderMessage = () => {
    if (success) {
      return (
        <span data-test="congrats-message">
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