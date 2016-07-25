import React from "react"
import Header from "./Header"
import Footer from "./Footer"

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {title: "Welcome"};
  }

  changeTitle(title) {
    this.setState({title: title}); // ES6: title = title: title
  }

  render () {
    // setTimeout(() => { this.setState({title: "Welcome Steve"});}, 1000);
    // Header comp now gets a this.props object with title
    return (
      <div>
        <Header changeTitle={(this.changeTitle.bind(this))} title={this.state.title}/>
        <Footer />
      </div>
    );
  }
}
