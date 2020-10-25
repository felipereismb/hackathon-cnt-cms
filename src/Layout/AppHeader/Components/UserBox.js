import React from 'react';
import Ionicon from 'react-ionicons';
import { connect } from 'react-redux';

// Internacionalização
import { FormattedMessage } from 'react-intl';

import {
  DropdownToggle,
  DropdownMenu,
  Nav,
  NavItem,
  NavLink,
  UncontrolledButtonDropdown,
} from 'reactstrap';

import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import userDefault from '~/assets/utils/images/avatars/user_default.png';

import { logout } from '~/store/modules/auth/actions';

class UserBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleLogout = () => {
    this.props.logout();
  };

  render() {
    return (
      <>
        <div className="header-btn-lg pr-0">
          <div className="widget-content p-0">
            <div className="widget-content-wrapper">
              <div className="widget-content-left">
                <UncontrolledButtonDropdown>
                  <DropdownToggle color="link" className="p-0">
                    <img
                      width={40}
                      height={40}
                      className="rounded-circle"
                      src={userDefault}
                      alt="usuarioEmail"
                    />
                    <FontAwesomeIcon
                      className="ml-2 opacity-8 text-alternate"
                      icon={faAngleDown}
                    />
                  </DropdownToggle>
                  <DropdownMenu className="rm-pointers dropdown-menu-sm">
                    <Nav vertical>
                      <NavItem>
                        <NavLink onClick={this.handleLogout}>
                          <div className="widget-content-left mr-3">
                            {/* <img width={20} height={20} className="rounded-circle" src={this.props.usuario.UrlFoto ? this.props.usuario.UrlFoto : userDefault} alt="" /> */}
                            <Ionicon
                              color="#23d09e"
                              icon="ios-log-out"
                              fontSize="20px"
                              beat={false}
                            />
                          </div>
                          <div
                            className=" mr-2 text-alternate text-uppercase"
                            style={{
                              fontFamily: 'Circular Book',
                              fontSize: '12px',
                            }}
                          >
                            <FormattedMessage
                              id="userBox/botaoSair"
                              defaultMessage="Sair"
                            />
                          </div>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              </div>
              <div className="widget-content-left ml-3 header-user-info">
                <div className="widget-heading text-alternate font-weight-normal">
                  Admin
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(UserBox);
