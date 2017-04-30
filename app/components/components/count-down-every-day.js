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

export default class extends PureComponent {
  static propTypes = {
    targetHour: PropTypes.number,
    targetMinute: PropTypes.number,
    description: PropTypes.string,
  };

  static defaultProps = {
    targetHour: 0,
    targetMinute: 0,
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
      const date = new Date();
      date.setHours(parseInt(this.props.targetHour, 10), parseInt(this.props.targetMinute, 10), 0);
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

  renderDescription = () => Render.renderDescription(this.props.description, styles.description);

  renderDigit = () => {
    const params = [this.state.days, this.state.hours, this.state.minutes, this.state.seconds];
    const temp = DateStringPrettifier.prettifiyDateString(params);
    return Render.renderDigit(temp, styles.digit);
  };

  render() {
    return (
      <div style={styles.container}>
        {this.renderDescription()}
        {this.renderDigit()}
      </div>
    );
  }
}
