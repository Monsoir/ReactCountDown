import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';

import DateHelper from '../../utils/DateHelper';
import DateStringPrettifier from '../../utils/DateStringPrettifier';

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FDF5E6',
  },

  description: {
    // color: '#D2B48C',
    color: 'black',
    textAlign: 'center',
    fontSize: 50,
  },

  descriptionException: {
    color: 'red',
    textAlign: 'center',
    fontSize: 50,
  },

  digit: {
    // color: '#ecf0f1',
    color: 'black',
    textAlign: 'center',
    fontSize: 40,
  },

  digitException: {
    color: 'red',
    textAlign: 'center',
    fontSize: 40,
  },

};

export default class CountDownOnce extends PureComponent {
  static propTypes = {
    date: PropTypes.instanceOf(Date),
    description: PropTypes.string,
  };

  static defaultProps = {
    date: new Date(),
    description: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  componentDidMount() {
    window.setInterval(() => {
      const temp = DateHelper.prettifyTimeIntervalStartFromNow(this.props.date);
      const [tdays, thours, tminutes, tseconds] = temp;
      this.setState({
        days: tdays,
        hours: thours,
        minutes: tminutes,
        seconds: tseconds,
      });
    }, 1000);
  }

  renderDigit = (date) => {
    if (date) {
      const params = [this.state.days, this.state.hours, this.state.minutes, this.state.seconds];
      const temp = DateStringPrettifier.prettifiyDateString(params);
      const [days, hours, minutes, seconds] = temp;
      return (
        <p style={styles.digit}>{`${days} : ${hours} : ${minutes} : ${seconds}`}</p>
      );
    }

    return (
      <p style={styles.digitException}>{'NO DATE PROVIDED'}</p>
    );
  };

  renderDescription = (description) => {
    if (description && description.length > 0) {
      return (
        <p style={styles.description}>{description}</p>
      );
    }

    return (
      <p style={styles.descriptionException}>{'NO DESCRIPTION PROVIDED'}</p>
    );
  };

  render() {
    return (
      <div style={styles.container}>
        {this.renderDescription(this.props.description)}
        {this.renderDigit(this.props.date)}
      </div>
    );
  }

}
