import React, { Component } from "react";

class PhoneInfo extends Component {
  state = {
    editing: false,
    name: "",
    phone: ""
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state !== nextState) {
      return true;
    }
    // 바꾼 PhoneInfo 만 다시 그림.
    return this.props.info !== nextProps.info;
  }

  handleRemove = e => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  };

  handleToggleEdit = () => {
    const { onUpdate, info } = this.props;
    if (this.state.editing) {
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone
      });
    } else {
      this.setState({
        name: info.name,
        phone: info.phone
      });
    }
    this.setState({
      editing: !this.state.editing
    });
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, phone } = this.props.info;
    const { editing } = this.state;

    const style = {
      border: "1px solid black",
      margin: "8px",
      padding: "8px"
    };

    return (
      <div style={style}>
        {editing ? (
          <div>
            <div>
              <input
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </div>
            <div>
              <input
                name="phone"
                onChange={this.handleChange}
                value={this.state.phone}
              />
            </div>
          </div>
        ) : (
          <div>
            <div>
              <b>{name}</b>
            </div>
            <div>{phone}</div>
          </div>
        )}
        <button onClick={this.handleRemove}>삭제</button>
        <button onClick={this.handleToggleEdit}>
          {editing ? "적용" : "수정"}
        </button>
      </div>
    );
  }
}

export default PhoneInfo;
