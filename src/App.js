import React from 'react';
import Header from './screens/header'
import Main from './screens/main'
import Jobs from './screens/jobs'

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Jobs />
      </>
    );
  }
}

export default App;
