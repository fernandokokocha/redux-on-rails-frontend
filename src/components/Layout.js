import React from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Layout;
