import React from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col md={10} mdOffset={2}>
              {this.props.children[0]}
            </Col>
          </Row>
      
          <Row>
            <Col md={6} mdOffset={3}>
              {this.props.children[1]}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Layout;
