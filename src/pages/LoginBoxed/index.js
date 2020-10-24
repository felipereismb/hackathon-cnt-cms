import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import * as Yup from 'yup';
import { Col, Row, Button, FormGroup } from 'reactstrap';
import { Form, Input } from '@rocketseat/unform';

import { Formulario } from './styles';

import { loginRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  username: Yup.string().required('Insira seu e-mail'),
  password: Yup.string().required('Insira sua senha'),
});

export default function LoginBoxed() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ username, password }) {
    dispatch(loginRequest(username, password));
  }

  return (
    <>
      <ToastContainer autoClose={4000} />
      <div className="h-100 bg-system-colors bg-animation">
        <div className="d-flex h-100 justify-content-center align-items-center">
          <Col md="8" className="mx-auto app-login-box">
            <Formulario>
              <Form schema={schema} onSubmit={handleSubmit}>
                <div className="modal-dialog w-100 mx-auto">
                  <div className="modal-content">
                    <div className="modal-header">
                      <div className="app-logo mx-auto mb-3" />
                    </div>
                    <div className="modal-body">
                      <Row form>
                        <Col md={12}>
                          <FormGroup>
                            <Input
                              type="text"
                              name="username"
                              id="username"
                              className="input"
                              placeholder="Email, CPF ou Celular com DDD (2 dígitos)"
                            />
                          </FormGroup>
                        </Col>
                        <Col md={12}>
                          <FormGroup>
                            <Input
                              type="password"
                              name="password"
                              id="password"
                              className="input"
                              placeholder="Insira sua senha"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <div className="modal-footer clearfix">
                      <div className="float-right">
                        <Button color="primary" size="lg" type="submit">
                          {loading ? 'Carregando...' : 'Login'}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            </Formulario>
          </Col>
        </div>
      </div>
    </>
  );
}
