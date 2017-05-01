import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import Digit from './digit';
import Unit from './unit';
import styles from './digit-unit.css';

export default class DigitUnit extends PureComponent {
  static propTypes = {
    digit: PropTypes.string,
    unit: PropTypes.string,
  };

  static defaultProps = {
    digit: '00',
    unit: 'unit',
  };

  render() {
    return (
      <div className={styles.container}>
        <Digit digit={this.props.digit} />
        <Unit unit={this.props.unit} />
      </div>
    );
  }
}
