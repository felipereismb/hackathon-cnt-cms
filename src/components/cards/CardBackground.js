import React from 'react';

class CardBackground extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <div
        className={"p-3 " + this.props.className}
        style={
          {
            border: 'solid 1px',
            justifyContent: 'center',
            borderColor: '#E2EBEF',
            backgroundColor: '#edf3f5'
          }
        }
      >
        {
          this.props.children
        }
      </div>
    )
  }
}

export default CardBackground;