import React, { Component} from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Tabs from 'react-responsive-tabs';

// Tabs From SideBar
import Navs from '../AppNav/Abas/Tabs';

import {
  setEnableMobileMenu,
  setActiveTab,
} from '~/store/modules/themeOptions/actions';

class AppSidebar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      activeTab: props.activeTab,
      tabs: this.getTabs(),
    };
  }

  getTabs() {
    let items = [];
    const itemsManager = [
      {
        title: 'Portal CNT',
        getContent: () => <Navs />,
      },
    ];
    items = items.concat(itemsManager);

    return items;
  }

  toggleMobileSidebar = () => {
    const { enableMobileMenu, setEnableMobileMenu } = this.props;
    setEnableMobileMenu(!enableMobileMenu);
  };

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      const { setActiveTab } = this.props;
      this.setState({
        activeTab: tab,
      });
      setActiveTab(tab);
    }
  }

  render() {
    const { backgroundColor, enableSidebarShadow } = this.props;

    return (
      <>
        <div
          className="sidebar-mobile-overlay"
          onClick={this.toggleMobileSidebar}
        />

        <ReactCSSTransitionGroup
          component="div"
          className={cx('app-sidebar', backgroundColor, {
            'sidebar-shadow': enableSidebarShadow,
          })}
          transitionName="SidebarAnimation"
          transitionAppear
          transitionAppearTimeout={1000}
          transitionEnter={false}
          transitionLeave={false}
        >
          {/* <HeaderLogo/> */}
          <PerfectScrollbar>
            <div className="app-sidebar__inner">
              <div className="app-inner-layout">
                <Tabs
                  tabsWrapperClass="body-tabs body-tabs-alt size_100"
                  onChange={this.toggle}
                  selectedTabKey={this.state.activeTab}
                  transform={false}
                  showInkBar={false}
                  showMoreLabel={this.state.tabs[this.state.activeTab].title}
                  items={this.state.tabs}
                />
              </div>
            </div>
          </PerfectScrollbar>
        </ReactCSSTransitionGroup>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  enableSidebarShadow: state.themeOptions.enableSidebarShadow,
  backgroundColor: state.themeOptions.backgroundColor,
  enableBackgroundImage: state.themeOptions.enableBackgroundImage,
  enableMobileMenu: state.themeOptions.enableMobileMenu,
  backgroundImage: state.themeOptions.backgroundImage,
  backgroundImageOpacity: state.themeOptions.backgroundImageOpacity,
  activeTab: state.themeOptions.activeTab,
});

const mapDispatchToProps = {
  setEnableMobileMenu,
  setActiveTab,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppSidebar);
