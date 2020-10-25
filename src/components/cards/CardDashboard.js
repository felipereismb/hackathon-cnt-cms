import React from 'react';
import { connect } from 'react-redux';

// Componentes Bibliotecas
import {
  Card, CardBody
} from 'reactstrap';

class CardDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <div className={"pr-3 pl-3 " + this.props.className}>
        <Card
          className={
            this.props.cardReduzido ? "mb-0 mt-0 pt-0" : "mb-0 mt-0 pt-0 ml-3 mr-3"
          }
        >
          <CardBody className={this.props.mobileSize ? "ml-1 mr-1 pt-0" : "pt-0 ml-4 mr-4"}>
            {
              this.props.children
            }
          </CardBody>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  mobileSize: state.themeOptions.mobileSize,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CardDashboard);