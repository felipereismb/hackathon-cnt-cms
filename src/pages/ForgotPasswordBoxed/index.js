import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const ForgotPasswordBoxed = ({ match }) => {

  const recoverPass = () => {
  }

  return (
    <Fragment>
      <div className="h-100 bg-system-colors bg-animation">
        <div className="d-flex h-100 justify-content-center align-items-center">
          <Col md="6" className="mx-auto app-login-box">
            <div className="modal-dialog w-100">
              <div className="modal-content">
                <div className="modal-header">
                  <div className="app-logo mx-auto mb-3" />
                </div>
                <div className="modal-body">
                  <div>
                    <Form>
                      <Row form>
                        <Col md={12}>
                          <FormGroup>
                            <Input type="email" name="email" id="exampleEmail"
                              placeholder="Insira seu email" />
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                  <h6 className="mb-0">
                    <Link to="/login/">Faça login com uma conta existente</Link>
                  </h6>
                </div>
                <div className="modal-footer clearfix">
                  <div className="float-right">
                    <Button color="primary" size="lg" onClick={() => recoverPass()} >Recuperar Senha</Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </div>
      </div>
    </Fragment>
  );
};

export default ForgotPasswordBoxed;