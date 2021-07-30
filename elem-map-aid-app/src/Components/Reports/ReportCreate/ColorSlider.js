import React from 'react';
import { SliderPicker  } from 'react-color';
class ColorSliderWrapper extends React.Component {
  state = {
    background: '#fff',
  };

  handleChangeComplete = (color) => {
    console.log("handleChangeComplete wrapper");
    this.setState({ background: color.hex });
  };

  render() {
    
    return (
      <ColorSlider 
        value={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }
      />
    );
  }
}
class ColorSlider extends React.Component {
  render() {
    return (
      <SliderPicker 
        color={ this.props.value }
        onChangeComplete={ this.props.handleChangeComplete }
      />
    );
  }
}
export default ColorSliderWrapper;