import React from 'react';
import { connect } from 'react-redux';

import Hamburger from 'react-hamburgers';

import AppMobileMenu from '../AppMobileMenu';

import {
  setEnableClosedSidebar,
  setEnableMobileMenu,
  setEnableMobileMenuSmall,
} from '~/store/modules/themeOptions/actions';

class HeaderLogo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  toggleEnableClosedSidebar = () => {
    const { enableClosedSidebar, setEnableClosedSidebar } = this.props;
    setEnableClosedSidebar(!enableClosedSidebar);
  };

  render() {
    const { enableClosedSidebar } = this.props;

    return (
      <>
        <div className="app-header__logo">
          <div className="header__pane ml-auto">
            <div onClick={this.toggleEnableClosedSidebar}>
              <Hamburger
                active={!enableClosedSidebar}
                type="elastic"
                onClick={this.toggleEnableClosedSidebar}
              />
            </div>
          </div>
          <div className="logo-src">
            <img width="auto" height="100%" src="" alt="logo" />
          </div>
        </div>
        <AppMobileMenu />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  enableClosedSidebar: state.themeOptions.enableClosedSidebar,
  enableMobileMenu: state.themeOptions.enableMobileMenu,
  enableMobileMenuSmall: state.themeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = (dispatch) => ({
  setEnableClosedSidebar: (enable) => dispatch(setEnableClosedSidebar(enable)),
  setEnableMobileMenu: (enable) => dispatch(setEnableMobileMenu(enable)),
  setEnableMobileMenuSmall: (enable) =>
    dispatch(setEnableMobileMenuSmall(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLogo);
