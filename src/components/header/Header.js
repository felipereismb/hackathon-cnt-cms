import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { title, onClickBack } = this.props;

    return (
      <>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
          <div
            className={`app-page-title ${
              onClickBack ? 'bg-alternate' : 'bg-header-tomato2'
            } mb-0 pt-4`}
          >
            {title}
          </div>
        </ReactCSSTransitionGroup>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  mobileSize: state.themeOptions.mobileSize,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
