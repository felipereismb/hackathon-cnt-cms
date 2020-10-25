import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

// Componentes Bibliotecas
import { Table } from 'reactstrap';

// Components
import Checkbox from '~/components/_layouts/forms/Checkbox';
import HeaderTable from './HeaderTable';
import Pagination from './Pagination';

// Operators
import { downloadCsv } from '~/assets/utils/operators/download';

// Styles
import { ColumnTable, RowTable } from '~/components/_layouts/styles';

class TableDefault extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: [],
      allSelect: false
    }
  }

  componentDidUpdate(prevProps, prevState) { }

  getColum = (item, index) => {
    let columns = []
    let aux = item.split('/');

    columns.push(
      <ColumnTable
        style={{ verticalAlign: 'baseline' }}
        key={this.props.id + "columnsHeader" + index}
      >
        {aux.map((item, indexItem) =>
          <div key={this.props.id + "columns" + index + indexItem}
            style={{
              fontWeight: indexItem === 0 ? 'bold' : '',
              color: indexItem !== 0 && '#93AFB7',
              fontSize: indexItem !== 0 ? '14px' : '12px'
            }}
          >
            {item}
          </div>
        )}
      </ColumnTable>
    )
    return columns
  }

  getRow = (item, index, whitCheckbox) => {
    let rows = [];

    if (whitCheckbox) {
      rows.push(<RowTable key={this.props.id + "rowCheckbox" + index}>
        <Checkbox
          checked={this.state.selected.includes(item)}
          onClick={() => this.onRowClick(item, index)}
          id={'Checkbox' + item[this.props.columns[0]]}
        />
      </RowTable>)
    }

    item.map((element, itemIndex) => {
      let aux = typeof (element) === 'string' ? element.split('/') : element;
      rows.push(
        <RowTable
          style={{ verticalAlign: 'baseline' }}
          key={this.props.id + index + "RowTable" + itemIndex}
        >
          {aux !== element ?
            aux.map((item, rowIndex) =>
              <div key={this.props.id + index + "row" + itemIndex + rowIndex}
                style={{ fontSize: rowIndex === 0 ? '14px' : '12px' }}
              >
                {item}
              </div>
            )
            :
            <div key={this.props.id + index + "row" + itemIndex + 'element'}>
              {element}
            </div>
          }
        </RowTable>
      )
    })

    return rows;
  }

  onRowClick = (item, dataIndex) => {
    let aux = this.state.selected;

    const i = aux.indexOf(item);
    if (i > -1) {
      aux.splice(i, 1);
    } else {
      aux.push(item);
    }

    this.props.onRowSelect(aux);
    this.setState({ selected: aux });
  }

  onChangeAll = () => {
    let aux = [];

    if (!this.state.allSelect) {
      this.props.dataTable.map(item => {
        aux.push(item);
      })
    }

    this.props.onRowSelect(aux);
    this.setState({
      selected: aux,
      allSelect: !this.state.allSelect
    })
  }

  dowloandData = () => {
    let fileName = 'export_' + this.props.id + '.xls';

    let csv = "<div><table>";

    csv += "<thead>";
    csv += "<tr>";
    this.props.columns.map(colum => {
      csv += "<th>";
      csv += "<div>";
      csv += colum;
      csv += "</div>";
      csv += "</th>";
    })
    csv += "</tr>";
    csv += "</thead>";

    csv += "<tbody>";
    this.props.dataTable.map(row => {
      csv += "<tr>";
      row.map(item => {
        if (typeof (item) !== 'object')
          csv += "<td><div>" + item + "</div></td>";
      })
      csv += "</tr>";
    })
    csv += "</tbody>";
    csv += "</table></div>";

    let a = document.createElement('a');
    let data_type = 'data:application/vnd.ms-excel';
    let table_html = csv.replace(/ /g, '%20');
    a.href = data_type + ', ' + table_html;
    a.download = fileName;
    a.click();

    // downloadCsv(csv, fileName);
  }

  render() {
    let { columns, whitCheckbox, id, withActions, itemMiddle,
      dataTable, pagina, active, itensPorPagina,
      totalTodos, totalAtivas, totalArquivadas, totalItens,
      hasNext, hasPrevious, withoutSelectComponents
    } = this.props;

    let { selected } = this.state;

    return (
      <Fragment>
        <HeaderTable
          whitCheckbox={whitCheckbox}
          withoutSelectComponents={withoutSelectComponents}
          selecionados={selected.length}
          todas={totalTodos}
          ativas={totalAtivas}
          arquivadas={totalArquivadas}
          active={active}
          changeActive={(value) => this.props.changeAba(value)}
          dowloandData={() => this.dowloandData()}
          search={(filter) => this.props.onSearch(filter)}
          showOnlyTodas={this.props.showOnlyTodas ? true : false}
          itemMiddle={itemMiddle}
        // onClickAcoesEmGrupo={}
        />
        <div id={'id/' + this.props.id}>
          <Table responsive className="mb-0" >
            <thead style={{ border: '1px solid #D9E5EB', backgroundColor: '#00487E0D' }}>
              <tr key={'trHead' + id}>
                {whitCheckbox &&
                  <RowTable key={id + 'rowAllSelect'}>
                    <Checkbox
                      checked={selected.length === dataTable.length}
                      onClick={() => this.onChangeAll()}
                      id={id + 'allSelect'}
                    />
                  </RowTable>
                }
                {
                  columns && columns.map((item, index) => this.getColum(item, index))
                }
                {
                  withActions && this.getColum('', 'acoes')
                }
              </tr>
            </thead>
            <tbody style={{ border: '1px solid #D9E5EB' }}>
              {
                dataTable && dataTable.map((item, index) =>
                  <tr style={{ border: '1px solid #D9E5EB' }} key={id + index + 'row' + index}>
                    {this.getRow(item, index, whitCheckbox)}
                  </tr>
                )
              }
            </tbody>
          </Table>
        </div>
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
    )
  }
}

TableDefault.propTypes = {
  columns: PropTypes.array.isRequired,
  dataTable: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  whitCheckbox: PropTypes.bool,
  withActions: PropTypes.bool,
}

TableDefault.defaultProps = {
  columns: [],
  dataTable: [],
  whitCheckbox: false,
  withActions: false,
  id: 'tabelaDefault',
}

export default TableDefault;