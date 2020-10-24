import React from 'react';
import PropTypes from 'prop-types';

// Componentes bibliotecas
import Chip from '@material-ui/core/Chip';

// Images
import close from '~/assets/utils/images/imagensFolhaCerta/close.svg';

class LabelChip extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item, label, blue, onDelete } = this.props;

    return (
      <>
        <Chip
          style={{
            borderRadius: '5px',
            backgroundColor: blue ? '#00487E' : '#29d694',
            color: blue ? '#29d694' : 'white',
            textTransform: 'uppercase',
            fontSize: '12px',
            border: 'none',
          }}
          className="ml-1 mr-1 mt-1"
          variant="outlined"
          label={label}
          size="small"
          deleteIcon={
            <div style={{
              backgroundColor: blue ? '#004D7E' : '#25C68D',
              height: '100%',
              width: 'auto',
            }}>
              <img
                width='10px'
                height='10px'
                src={close}
                style={{
                  marginTop: '2px',
                  marginRight: '4px',
                  marginLeft: '6px'
                }}
                alt="removerItem"
              />
            </div>
          }
          onDelete={() => onDelete(item)}
        />
      </>
    )
  }
}

LabelChip.propTypes = {
  item: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  blue: PropTypes.bool,
}

LabelChip.defaultProps = {
  blue: false,
}

export default LabelChip;