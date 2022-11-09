import React, { Component } from "react";

const answer = "test answer";

class Post extends Component {
  constructor(props) {
    super(props);
    const userMessage = this.props.previousStep.value;
    console.log(userMessage);

    this.state = { userMessage };
  }

  componentDidMount() {}

  render() {
    return <div>{answer}</div>;
  }
}

export default Post;
