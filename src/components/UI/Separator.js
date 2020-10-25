import React, { Fragment } from 'react';
import { connect } from 'react-redux';

class Separator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let style = {};

    if (!this.props.modal) {
      style = { marginLeft: '-44px' };
    }

    if (this.props.mobileSize) {
      style = { marginLeft: '-24px' };
    }

    return (
      <Fragment>
        <div className="d-flex align-items-center mb-4 mt-4" style={style}>
          <div
            style={{
              height: '10px',
              width: '10px',
              background: '#08B3D1',
            }}
          />

          <div
            className="ml-4 text-primary text-uppercase"
            style={{
              // fontFamily: "Circular Book",
              letterSpacing: '.1rem',
            }}
          >
            {this.props.texto}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  mobileSize: state.themeOptions.mobileSize,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Separator);
