import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <div className="user-header logo">
        <img alt="Current Logged in user" src={this.props.userLogo}/>
        <a href={this.props.userlink}>{this.props.name}</a>
      </div>
    )
  }
}

export default User;