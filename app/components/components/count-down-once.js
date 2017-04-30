import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';

import DateHelper from '../../utils/DateHelper';
import DateStringPrettifier from '../../utils/DateStringPrettifier';
import Render from '../../utils/Render';

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
    year: PropTypes.number,
    month: PropTypes.number,
    day: PropTypes.number,
    hour: PropTypes.number,
    minute: PropTypes.number,
  };

  static defaultProps = {
    date: null,
    description: '',
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
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
      let date = null;
      if (this.props.date) {
        date = this.props.date;
      } else {
        date = new Date();
        date.setFullYear(this.props.year, this.props.month, this.props.day);
        date.setHours(this.props.hour, this.props.minute, 0);
      }
      const temp = DateHelper.prettifyTimeIntervalStartFromNow(date);
      const [tdays, thours, tminutes, tseconds] = temp;
      this.setState({
        days: tdays,
        hours: thours,
        minutes: tminutes,
        seconds: tseconds,
      });
    }, 1000);
  }

  renderDigit = () => {
    const params = [this.state.days, this.state.hours, this.state.minutes, this.state.seconds];
    const temp = DateStringPrettifier.prettifiyDateString(params);
    return Render.renderDigit(temp, styles.digit);
  };

  renderDescription = () => Render.renderDescription(this.props.description, styles.description);

  render() {
    return (
      <div style={styles.container}>
        {this.renderDescription()}
        {this.renderDigit()}
      </div>
    );
  }

}
