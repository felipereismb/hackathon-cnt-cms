import React from 'react';
import PropTypes from 'prop-types';

import { CardHeader, Col, Row } from 'reactstrap';

class CardBoxHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let {
      title,
      component,
      className,
      backgroundColor,
      titleColor,
    } = this.props;

    return (
      <CardHeader
        className={'p-0 text-primary ' + className}
        style={{ backgroundColor: backgroundColor }}
      >
        {component ? (
          <Row
            className="w-100 align-items-center m-0"
            style={{ height: '100%' }}
          >
            <Col
              md={6}
              xs={6}
              className="p-0 pl-2"
              style={{
                fontFamily: 'Circular Book',
                fontSize: '15px',
                fontWeight: '100',
                letterSpacing: '.1rem',
                color: titleColor,
              }}
            >
              {title}
            </Col>
            <Col
              md={6}
              xs={6}
              className="p-0 pl-4"
              style={{
                height: '100%',
                textAlign: 'center',
              }}
            >
              {component}
            </Col>
          </Row>
        ) : (
          <Col
            md={12}
            xs={12}
            className="p-0 pl-2"
            style={{
              fontFamily: 'Circular Book',
              fontSize: '15px',
              fontWeight: '100',
              letterSpacing: '.1rem',
              color: titleColor,
            }}
          >
            {title}
          </Col>
        )}
      </CardHeader>
    );
  }
}

CardBoxHeader.propTypes = {
  title: PropTypes.string.isRequired,
  component: PropTypes.any,
};

export default CardBoxHeader;
