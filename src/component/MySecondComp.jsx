import { Component } from "react";

class MySecondComp extends Component {
  render() {
    return (
      <div className="second-component">
        <h4> second component</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro aut
          debitis blanditiis magnam? Possimus dolore voluptatum architecto ea
          similique suscipit commodi! Dolore ab praesentium, accusantium itaque
          harum ipsa voluptas ullam.
        </p>
        <p>user name: {this.props.user.name}</p>
      </div>
    );
  }
}

export default MySecondComp;
