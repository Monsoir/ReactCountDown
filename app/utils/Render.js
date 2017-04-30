import React from 'react';

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
};

export default class Render {
  static renderDescription(description, descriptionStyle, descriptionExceptionStyle = styles.descriptionException) {
    if (description && description.length > 0) {
      return (
        <p style={descriptionStyle}>{description}</p>
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
        <p style={digitStyle}>{`${days} : ${hours} : ${minutes} : ${seconds}`}</p>
      );
    }

    return (
      <p style={styleExceptionStyle}>{'NO DATE PROVIDED'}</p>
    );
  }
}
