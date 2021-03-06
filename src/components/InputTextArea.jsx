import React from 'react';
import PropTypes from 'prop-types';

class InputTextArea extends React.Component {
  render() {
    const {
      name,
      value,
      onChange,
    } = this.props;

    const LabelDataTestid = 'storyline-input-label';
    const InputDataTestid = 'storyline-input';

    return (
      <label data-testid={ LabelDataTestid } htmlFor={ InputDataTestid }>
        Sinopse
        <textarea
          data-testid={ InputDataTestid }
          name={ name }
          value={ value }
          id={ InputDataTestid }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputTextArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputTextArea;
