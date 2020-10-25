import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//Componentes Bibliotecas
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

// Const
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

class ComboPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selecteds: this.props.value ? this.props.value : null,

      passDerivedState: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.value && !state.passDerivedState) {
      return {
        selecteds: props.value,
        passDerivedState: true,
      };
    }

    return null;
  }

  handleChange = (event) => {
    this.setState({ selecteds: event.target.value });
    this.props.onClick(event.target.value);
  };

  render() {
    let { arrayKey, data, disabled } = this.props;

    return (
      <Fragment>
        <FormControl fullWidth>
          <InputLabel className="text-uppercase" htmlFor="select-input">
            {this.props.input}
          </InputLabel>
          <Select
            className={this.props.className}
            multiple={this.props.multiple}
            value={this.props.value}
            onChange={this.handleChange}
            inputProps={{ id: 'select-input' }}
            renderValue={(selected) => (
              <div>
                {this.props.multiple ? (
                  selected.map((item) => (
                    <Chip key={item[arrayKey]} label={item[arrayKey]} />
                  ))
                ) : (
                  <div>{selected[arrayKey]}</div>
                )}
              </div>
            )}
            MenuProps={MenuProps}
            style={{
              width: '100%',
              // marginTop: '0px'
            }}
            disabled={disabled}
          >
            {this.props.data &&
              this.props.data.map((item) => (
                <MenuItem key={item[arrayKey]} value={item}>
                  <div>{item[arrayKey]}</div>
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Fragment>
    );
  }
}

ComboPicker.propTypes = {
  id: PropTypes.string.isRequired,
  arrayKey: PropTypes.string.isRequired,
  input: PropTypes.string,

  onClick: PropTypes.func.isRequired,
};

export default ComboPicker;
