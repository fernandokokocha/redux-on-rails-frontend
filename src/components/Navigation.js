import React from 'react';
import { connect } from 'react-redux'

import { Nav, NavItem } from 'react-bootstrap'

const navStye = { marginBottom: '30px'}

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Nav bsStyle="pills" activeKey={this.props.tab} style={navStye}>
        <NavItem eventKey={1} onSelect={this.props.onSelect}>Home</NavItem>
        <NavItem eventKey={2} onSelect={this.props.onSelect}>Incrementer</NavItem>
      </Nav>
    );
  }
}

export default Navigation;
