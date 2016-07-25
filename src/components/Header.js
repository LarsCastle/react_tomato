import React from "react";
import Title from "./Header/Title";

export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    //console.log(this.props);
    this.props.changeTitle(title);
  }

  render () {
    // setTimeout(() => this.props.changeTitle("newTitle"), 1000);
    return (
      <div>
        <Title title={this.props.title}/>
        <input value={this.props.title} onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}
