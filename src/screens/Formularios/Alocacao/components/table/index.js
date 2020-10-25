import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Componentes Bibliotecas
import { Table } from 'reactstrap';

// Components
import HeaderTable from './HeaderTable';
import Pagination from '~/components/table/Pagination';

// Styles
import { ColumnTable, RowTable } from '../../styles';

class TableDefault extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  getColum = (item, index) => {
    let columns = [];
    let aux = item.split('/');

    columns.push(
      <ColumnTable
        style={{ verticalAlign: 'baseline' }}
        key={this.props.id + 'columnsHeader' + index}
      >
        {aux.map((item, indexItem) => (
          <div
            key={this.props.id + 'columns' + index + indexItem}
            style={{
              fontWeight: indexItem === 0 ? 'bold' : '',
              color: indexItem !== 0 && '#93AFB7',
              fontSize: indexItem !== 0 ? '14px' : '12px',
            }}
          >
            {item}
          </div>
        ))}
      </ColumnTable>,
    );
    return columns;
  };

  getRow = (item, index) => {
    let rows = [];

    item.map((element, itemIndex) => {
      let aux = typeof element === 'string' ? element.split('/') : element;
      rows.push(
        <RowTable
          style={{ verticalAlign: 'baseline' }}
          key={this.props.id + index + 'RowTable' + itemIndex}
        >
          {aux !== element ? (
            aux.map((item, rowIndex) => (
              <div
                key={this.props.id + index + 'row' + itemIndex + rowIndex}
                style={{ fontSize: rowIndex === 0 ? '14px' : '12px' }}
              >
                {item}
              </div>
            ))
          ) : (
            <div key={this.props.id + index + 'row' + itemIndex + 'element'}>
              {element}
            </div>
          )}
        </RowTable>,
      );
    });

    return rows;
  };

  dowloandData = () => {
    let fileName = 'export_' + this.props.id + '.xls';

    let csv = '<div><table>';

    csv += '<thead>';
    csv += '<tr>';
    this.props.columns.map((colum) => {
      csv += '<th>';
      csv += '<div>';
      csv += colum;
      csv += '</div>';
      csv += '</th>';
    });
    csv += '</tr>';
    csv += '</thead>';

    csv += '<tbody>';
    this.props.dataTable.map((row) => {
      csv += '<tr>';
      row.map((item) => {
        if (typeof item !== 'object') csv += '<td><div>' + item + '</div></td>';
      });
      csv += '</tr>';
    });
    csv += '</tbody>';
    csv += '</table></div>';

    let a = document.createElement('a');
    let data_type = 'data:application/vnd.ms-excel';
    let table_html = csv.replace(/ /g, '%20');
    a.href = data_type + ', ' + table_html;
    a.download = fileName;
    a.click();
  };

  render() {
    let {
      columns,
      id,
      withActions,
      dataTable,
      pagina,
      active,
      itensPorPagina,
      totalItens,
      hasNext,
      hasPrevious,
    } = this.props;

    return (
      <Fragment>
        <HeaderTable
          totalItens={totalItens}
          active={active}
          changeActive={(value) => this.props.changeAba(value)}
          dowloandData={() => this.dowloandData()}
          search={(filter) => this.props.onSearch(filter)}
        />

        <Table responsive className="mb-0">
          <thead
            style={{
              border: '1px solid #D9E5EB',
              backgroundColor: '#00487E0D',
            }}
          >
            <tr key={'trHead' + id}>
              {columns &&
                columns.map((item, index) => this.getColum(item, index))}
            </tr>
          </thead>
          <tbody style={{ border: '1px solid #D9E5EB' }}>
            {dataTable &&
              dataTable.map((item, index) => (
                <tr
                  style={{ border: '1px solid #D9E5EB' }}
                  key={id + index + 'row' + index}
                >
                  {this.getRow(item, index)}
                </tr>
              ))}
          </tbody>
        </Table>

        <Pagination
          totalItens={totalItens}
          itensPorPagina={itensPorPagina}
          pagina={pagina}
          hasNext={hasNext}
          hasPrevious={hasPrevious}
          changeItemPorPagina={(value) => this.props.changeItemPorPagina(value)}
          onChangePagina={(value) => this.props.onChangePage(value)}
          itensNestaPagina={dataTable ? dataTable.length : 0}
        />
      </Fragment>
    );
  }
}

TableDefault.propTypes = {
  columns: PropTypes.array.isRequired,
  dataTable: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  withActions: PropTypes.bool,
};

TableDefault.defaultProps = {
  columns: [],
  dataTable: [],
  withActions: false,
  id: 'tabelaDefault',
};

export default TableDefault;
