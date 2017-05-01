import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import styles from './unit.css';

export default class Unit extends PureComponent {
  static propTypes = {
    unit: PropTypes.string,
  };

  static defaultProps = {
    unit: 'unit',
  };

  render() {
    return (
      <div className={styles.unit}>{this.props.unit}</div>
    );
  }
}
