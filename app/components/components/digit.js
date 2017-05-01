import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import styles from './digit.css';

export default class Digit extends PureComponent {
  static propTypes = {
    digit: PropTypes.string,
  };

  static defaultProps = {
    digit: '00',
  };

  render() {
    return (
      <div className={styles.digit}>{this.props.digit}</div>
    );
  }
}
