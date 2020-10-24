import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import MetisMenu from 'react-metismenu';

import createAbas from './NavItems';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.navs = createAbas();
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  render() {
    return (
      <>
        <MetisMenu
          content={this.navs}
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
          activeLinkFromLocation
        />
      </>
    );
  }
}

export default withRouter(Nav);
