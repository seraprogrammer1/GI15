import React from "react";
import BasicInfo from "./BasicInfo";


class AppClass extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      person: {
        name: props.name,
        age: props.age,
        DOB: props.DOB,
        city: props.city,
      },
    };
  }
  render() {
    return (
      <div class="holder" key={this.state.name}>
        <BasicInfo>{this.state.person}</BasicInfo>
      </div>
    );
  }
}

export default AppClass;