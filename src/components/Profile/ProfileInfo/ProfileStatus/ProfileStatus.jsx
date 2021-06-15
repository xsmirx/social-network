import React from "react";

export class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };
  activeteEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivteEditMode = () => {
    this.setState({
      editMode: false,
    });
  };
  render() {
    let status = this.state.editMode ? (
      <input
        type="text"
        autoFocus={true}
        value={this.props.status}
        onBlur={this.deactivteEditMode}
      />
    ) : (
      <p onDoubleClick={this.activeteEditMode}>{this.props.status}</p>
    );

    return <div>{status}</div>;
  }
}
