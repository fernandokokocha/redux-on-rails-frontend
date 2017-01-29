import React from 'react';

import Layout from './Layout';
import Navigation from './Navigation';
import Content from './Content';
import FacebookAuthenticator from './FacebookAuthenticator';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FacebookAuthenticator />
        <Navigation />
        <Layout>
          <Content />
        </Layout>
      </div>
    );
  }
}

export default App;
