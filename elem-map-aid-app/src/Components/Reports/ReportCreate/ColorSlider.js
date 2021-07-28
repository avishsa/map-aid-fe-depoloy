import React from 'react';
import { SliderPicker } from 'react-color';

class ColorSlider extends React.Component {
  state = {
    background: '#fff',
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  render() {
      return <SliderPicker className={this.props.width}/>;
      return (
        <input type="color" className="mx-2" ></input>
      );
    return (

      <SliderPicker
        color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }
      />
    );
  }
}
export default ColorSlider;