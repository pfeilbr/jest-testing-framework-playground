import * as React from "react";
export default class MyComponent extends React.Component<
  { title: string },
  { count: number }
> {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick(event) {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>
          <label htmlFor="count">Count</label>
          <input
            type="text"
            name="count"
            readOnly
            value={`${this.state.count}`}
          />
          <button onClick={this.handleClick.bind(this)}>click</button>
        </div>
      </div>
    );
  }
}
