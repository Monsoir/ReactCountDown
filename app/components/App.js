import React from 'react';
import CountDownOnce from './components/count-down-once';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#34495e',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
};

export default () => (
  <div style={styles.container}>
    <CountDownOnce
      description={'description haha'}
      date={new Date(2017, 3, 29)}
    />
  </div>
);

/*
export default class App extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <CountDownOnce
          description={'description haha'}
          date={new Date(2017, 3, 29)}
        />
      </div>
    );
  }
}
*/
