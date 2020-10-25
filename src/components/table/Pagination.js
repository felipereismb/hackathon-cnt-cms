import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

// Icons
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

// Componentes Bibliotecas
import { Row, Col } from 'reactstrap';

class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    let { totalItens, itensPorPagina, pagina, itensNestaPagina,
      hasNext, hasPrevious
    } = this.props;

    let indexInicial = 1 + (itensPorPagina * (pagina - 1));
    let indexFinal = (itensPorPagina * (pagina - 1)) + itensNestaPagina;

    return (
      <Fragment>
        <Row className="ml-0 mr-0 mt-3">
          <Col md={5}></Col>
          <Col md={7} className="d-flex align-items-center p-0">
            <Col md={6} xs={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              itens por página:
              <select
                className="ml-1"
                style={{ border: 'none', outline: 'none' }}
                onChange={event => this.props.changeItemPorPagina(event.target.value)}
              >
                <option value={25} selected={itensPorPagina === 25}>25</option>
                <option value={50} selected={itensPorPagina === 50}>50</option>
                <option value={100} selected={itensPorPagina === 100}>100</option>
                <option value={200} selected={itensPorPagina === 200}>200</option>
              </select>
            </Col>
            <Col md={3} xs={3} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div className="ml-2">
                {indexInicial} - {indexFinal} de {totalItens}
              </div>
            </Col>

            <Col md={3} xs={3}
              className="p-0"
              style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              <GrFormPrevious className="mr-3" style={{ cursor: 'pointer' }} onClick={() => {
                if (hasPrevious)
                  this.props.onChangePagina(pagina - 1)
              }} />
              <GrFormNext className="ml-3" style={{ cursor: 'pointer' }} onClick={() => {
                if (hasNext)
                  this.props.onChangePagina(pagina + 1)
              }} />
            </Col>
          </Col>
        </Row>
      </Fragment>
    )
  }
}

Pagination.propTypes = {
  totalItens: PropTypes.number.isRequired,
}

Pagination.defaultProps = {
}

export default Pagination;