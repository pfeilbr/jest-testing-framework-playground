import * as React from "react";
export default class MyComponent extends React.Component<{title: string}> {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
