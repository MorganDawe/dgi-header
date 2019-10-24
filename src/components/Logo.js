import React, { Component } from 'react';
 
class Logo extends Component {
  render() {
  	console.log(this.props.logoImage)
    return (
      <div className="user-header">
        <img className="site-logo" alt="Site Logo" src={this.props.logoImage}/>
      </div>
    )
  }
}

export default Logo;