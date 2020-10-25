import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import cx from 'classnames';

import { Row, Col, Button } from 'reactstrap';

// Images
import arrowBack from '~/assets/utils/images/imagensFolhaCerta/arrowBack.png';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onClickButton = () => {
    this.props.onClickButton();
  };

  setButton = () => {
    const { buttonName, onClickButton } = this.props;
    return (
      buttonName &&
      onClickButton && <Button onClick={onClickButton}>{buttonName}</Button>
    );
  };

  setComponent = (component) => {
    return component ? (
      <>
        <div className="divider-horizontal" />
        <div className="ml-0" style={{ height: '100%' }}>
          {component}
        </div>
      </>
    ) : (
      ''
    );
  };

  render() {
    const {
      title,
      subTitle,
      mobileSize,

      onClickBack,
    } = this.props;

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
            className={`page-title-wrapper ${
              onClickBack ? 'bg-alternate' : 'bg-first-page'
            } ${mobileSize && 'justify-content-center'} p-3 pb-5`}
          >
            <Row className="w-100 align-items-center m-0">
              {this.props.buttonName && this.props.onClickButton ? (
                <>
                  <Col xs={12} md={8}>
                    <div
                      className={cx('page-title-heading text-white', {
                        'justify-content-center': mobileSize,
                      })}
                      style={{
                        fontFamily: 'Circular Book',
                        fontSize: '28px',
                      }}
                    >
                      {onClickBack && (
                        <img
                          className="mr-3"
                          width="30px"
                          src={arrowBack}
                          onClick={onClickBack}
                          style={{ cursor: 'pointer' }}
                        />
                      )}
                      {title}
                    </div>
                    <div style={{ color: 'white', fontSize: '14px' }}>
                      {subTitle}
                    </div>
                  </Col>
                  <Col
                    xs={12}
                    md={4}
                    className={mobileSize ? 'text-center' : 'text-right'}
                  >
                    <div>{this.setButton()}</div>
                  </Col>
                </>
              ) : (
                <Col xs={12} md={12}>
                  <div
                    className={cx('page-title-heading text-white', {
                      'justify-content-center': mobileSize,
                    })}
                    style={{
                      fontFamily: 'Circular Book',
                      fontSize: '28px',
                    }}
                  >
                    {onClickBack && (
                      <img
                        className="mr-3"
                        width="30px"
                        src={arrowBack}
                        onClick={onClickBack}
                        style={{ cursor: 'pointer' }}
                      />
                    )}
                    {title}
                  </div>
                  <div style={{ color: 'white', fontSize: '14px' }}>
                    {subTitle}
                  </div>
                </Col>
              )}
            </Row>
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
