import React, { Component } from "react";
import "./style.css";
class SortingOptions extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    const selectedValue = e.target.value;
    const { onChange } = this.props;
    this.setState({ value: selectedValue });
    onChange(selectedValue);
  };

  render() {
    return (
      <div className="container__sortingOptions">
        <span>Sort by:</span>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value=""></option>
          <option value="name_asc">A Z</option>
          <option value="name_desc">Z A</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    );
  }
}

export default SortingOptions;
