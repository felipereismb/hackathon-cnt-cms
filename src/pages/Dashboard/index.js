import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import cx from 'classnames';
import { withRouter } from 'react-router-dom';
import ResizeDetector from 'react-resize-detector';

// pick a date util library
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

// Layout
import AppHeader from '~/Layout/AppHeader';
import AppSidebar from '~/Layout/AppSidebar';
import AppMain from '~/Layout/AppMain';

import { setMobileSize } from '~/store/modules/themeOptions/actions';

let width;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closedSmallerSidebar: false,
    };
  }

  onResize = (e) => {
    width = e;
    if (width < 992) {
      this.props.setMobileSize(true);
    } else {
      this.props.setMobileSize(false);
    }
  };

  render() {
    const {
      colorScheme,
      enableFixedHeader,
      enableFixedSidebar,
      enableFixedFooter,
      enableClosedSidebar,
      closedSmallerSidebar,
      enableMobileMenu,
      enablePageTabsAlt,
    } = this.props;

    return (
      <>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <ResizeDetector handleWidth handleHeight onResize={this.onResize} />
          <div
            className={cx(
              `app-container app-theme-${colorScheme}`,
              { 'fixed-header': enableFixedHeader },
              { 'fixed-sidebar': enableFixedSidebar || width < 992 },
              { 'fixed-footer': enableFixedFooter },
              { 'closed-sidebar': enableClosedSidebar || width < 992 },
              {
                'closed-sidebar-mobile': closedSmallerSidebar || width < 992,
              },
              { 'sidebar-mobile-open': enableMobileMenu },
              { 'body-tabs-shadow-btn': enablePageTabsAlt },
            )}
          >
            {/* <ThemeOptions /> */}
            <div className="app-main">
              <AppSidebar />
              <div className="app-main__outer">
                <AppHeader />
                <div className="app-main__inner">
                  <AppMain />
                </div>
              </div>
            </div>
          </div>
          <ToastContainer autoClose={4000} />
        </MuiPickersUtilsProvider>
      </>
    );
  }
}

const mapStateToProp = (state) => ({
  colorScheme: state.themeOptions.colorScheme,
  enableFixedHeader: state.themeOptions.enableFixedHeader,
  enableMobileMenu: state.themeOptions.enableMobileMenu,
  enableFixedFooter: state.themeOptions.enableFixedFooter,
  enableFixedSidebar: state.themeOptions.enableFixedSidebar,
  enableClosedSidebar: state.themeOptions.enableClosedSidebar,
  enablePageTabsAlt: state.themeOptions.enablePageTabsAlt,
});

const mapDispatchToProps = {
  setMobileSize,
};

export default withRouter(
  connect(mapStateToProp, mapDispatchToProps)(Dashboard),
);
