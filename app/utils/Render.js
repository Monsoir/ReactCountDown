import React from 'react';
import DigitUnit from '../components/components/digit-unit';

require('../components/App.css');

const styles = {
  descriptionException: {
    color: 'red',
    textAlign: 'center',
    fontSize: 50,
  },

  digitException: {
    color: 'red',
    textAlign: 'center',
    fontSize: 40,
  },

  digitSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
  },
};

export default class Render {
  static renderDescription(description, descriptionStyle, descriptionExceptionStyle = styles.descriptionException) {
    if (description && description.length > 0) {
      return (
        <div className="description">{description}</div>
      );
    }

    return (
      <p style={descriptionExceptionStyle}>{'NO DESCRIPTION PROVIDED'}</p>
    );
  }

  static renderDigit(dateComponent, digitStyle, styleExceptionStyle = styles.digitException) {
    if (dateComponent) {
      const [days, hours, minutes, seconds] = dateComponent;
      return (
        <div className="digitSection">
          <DigitUnit digit={`${days}`} unit={'Days'} />
          <DigitUnit digit={`${hours}`} unit={'Hours'} />
          <DigitUnit digit={`${minutes}`} unit={'Minutes'} />
          <DigitUnit digit={`${seconds}`} unit={'Seconds'} />
        </div>
      );
    }

    return (
      <p style={styleExceptionStyle}>{'NO DATE PROVIDED'}</p>
    );
  }
}
