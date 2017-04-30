import React from 'react';

import CountDownOnce from './components/count-down-once';
import CountDownEveryDay from './components/count-down-every-day';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#34495e',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
};

/*
export default () => (
  const date = new Date();
  date.setDate(30);
  date.setHours(24, 0);
  <div style={styles.container}>
    <CountDownOnce
      description={'description haha'}
      year={date.getFullYear()}
      month={date.getMonth()}
      day={date.getDate()}
      hour={date.getHours()}
      minute={date.getMinutes()}
    />
    <CountDownEveryDay
      description={'Countdown every day'}
      targetHour={24}
      targetMinute={0}
    />
  </div>
);
*/

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
    const date = new Date();
    date.setDate(30);
    date.setHours(24, 0);
    return (
      <div style={styles.container}>
        <CountDownOnce
          description={'description haha'}
          year={date.getFullYear()}
          month={date.getMonth()}
          day={date.getDate()}
          hour={date.getHours()}
          minute={date.getMinutes()}
        />
        <CountDownEveryDay
          description={'Countdown every day'}
          targetHour={24}
          targetMinute={0}
        />
      </div>
    );
  }
}

