import React from 'react';
import { connect } from 'react-redux'
import { increment, decrement } from '../redux/actions'

import Layout from './Layout'
import Navigation from './Navigation'
import Home from './Home'
import Incrementer from './Incrementer'

const PAGES = {
  HOME: 1,
  INCREMENTER: 2
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: props.initialTab
    };
    
    this.handleSelect = this.handleSelect.bind(this)
    this.renderContent = this.renderContent.bind(this)
  }
  
  handleSelect(eventKey) {
    this.setState({
      tab: eventKey
    });
  }
  
  renderContent() {
    if (this.state.tab == PAGES.HOME) {
      return <Home />
    } else if (this.state.tab == PAGES.INCREMENTER) {
      return <Incrementer />
    } else {
      return <div>500 Internal Error</div>
    }
  }
  
  render() {
    return (
      <Layout>
        <Navigation tab={this.state.tab} onSelect={this.handleSelect} />
        {this.renderContent()}
      </Layout>
    );
  }
}

App.defaultProps = {
  initialTab: 1
};

export default App;
