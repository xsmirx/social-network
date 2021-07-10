import React from "react";
import { TextField } from "@material-ui/core";

export class ProfileStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      status: this.props.status,
    };
  }
  activeteEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivteEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.setStatus(this.state.status);
  };
  onCahgeStatus = (e) => {
    this.setState({
      status: e.target.value,
    });
  };
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }
  
  render() {
    let status = this.state.editMode ? (
      <TextField
        type="text"
        autoFocus={true}
        value={this.state.status}
        onChange={this.onCahgeStatus}
        onBlur={this.deactivteEditMode}
      />
    ) : (
      <p onDoubleClick={this.activeteEditMode}>
        {this.props.status || "enter status"}
      </p>
    );

    return <div>{status}</div>;
  }
}
