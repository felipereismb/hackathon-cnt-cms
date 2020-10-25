import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";

// Icons
import SearchIcon from '@material-ui/icons/Search';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import PrintIcon from '@material-ui/icons/Print';
// import ViewColumnIcon from '@material-ui/icons/ViewColumn';
// import FilterListIcon from '@material-ui/icons/FilterList';

const defaultToolbarStyles = {
  iconButton: {
  },
};

class Toolbar extends React.Component {

  handleSearch = () => {
    this.props.handleSearch();
  }

  handleDownload = () => {
    this.props.handleDownload();
  }

  handlePrint = () => {
    // this.props.onClickArquivar();
    window.print();
  }

  handleColunas = () => {
    // this.props.onClickArquivar();
  }

  handleFilter = () => {
    // this.props.onClickArquivar();
  }

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Tooltip title={"Buscar"}>
          <IconButton className={classes.iconButton} onClick={this.handleSearch}>
            <SearchIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title={"Download CSV"}>
          <IconButton className={classes.iconButton} onClick={this.handleDownload}>
            <CloudDownloadIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title={"Imprimir"}>
          <IconButton className={classes.iconButton} onClick={this.handlePrint}>
            <PrintIcon />
          </IconButton>
        </Tooltip>

        {/* <Tooltip title={"Colunas"}>
          <IconButton className={classes.iconButton} onClick={this.handleColunas}>
            <ViewColumnIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title={"Filtar Lista"}>
          <IconButton className={classes.iconButton} onClick={this.handleFilter}>
            <FilterListIcon />
          </IconButton>
        </Tooltip> */}
      </Fragment>
    );
  }

}

Toolbar.propTypes = {
  showVer: PropTypes.bool,
  showArquivar: PropTypes.bool,
  showDesarquivar: PropTypes.bool,
  showCustomDownload: PropTypes.bool,
}

Toolbar.defaultProps = {
  showVer: true,
  showArquivar: true,
  showDesarquivar: true,
  showCustomDownload: false,
}

export default withStyles(defaultToolbarStyles, { name: "CustomToolbar" })(Toolbar);