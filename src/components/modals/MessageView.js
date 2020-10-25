import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Componentes Bibliotecas
import {
  Modal,
} from 'reactstrap';

// Image
import sucessoMsg from '~/assets/utils/images/imagensFolhaCerta/sucessoMsg.svg';
import insucessoMsg from '~/assets/utils/images/imagensFolhaCerta/insucessoMsg.svg';

class MessageView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  componentWillReceiveProps(nextProps) {
    // console.log('MESSAGE VIEW')
    // console.log(nextProps.open)
    // console.log(this.props.open)
    // if (nextProps.open && nextProps.open !== this.props.open) {
    //   this.timeOutMessage()
    // }
  }

  toggle = () => {
    this.props.onClick();
  }

  timeOutMessage = () => {
    setTimeout(() => {
      this.toggle();
    }, 2000);
  }

  render() {
    return (
      <Fragment>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
          <Modal
            isOpen={this.props.open}
            toggle={this.toggle}
            className={"text-center " + this.props.className}
          >
            <div className="p-5" style={{ placeSelf: 'center' }}>
              <div className="p-1" style={{ color: '#425054', fontSize: '20px' }}>
                <img
                  width='100px'
                  height='100px'
                  src={this.props.success ? sucessoMsg : insucessoMsg}
                />
              </div>
              <div className="p-1" style={{ color: '#425054', fontSize: '20px' }}>
                {this.props.message}
              </div>
              <div className="d-flex" style={{ justifyContent: 'center', fontSize: '17px' }}>
                {this.props.subMessage}
              </div>
            </div>
          </Modal>
        </ReactCSSTransitionGroup>
      </Fragment >
    )
  }
}

MessageView.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  subMessage: PropTypes.string,

  success: PropTypes.bool,
}

MessageView.defaultProps = {
  message: 'Erro inesperado!',
  subMessage: '',
  success: false
}

export default MessageView;