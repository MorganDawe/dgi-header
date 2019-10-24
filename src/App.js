import React, { Component } from 'react';
import './App.css';
import User from './components/User';
import user_logo from './user.svg';
import Menu from './components/Menu';

import Logo from './components/Logo';
   

class App extends Component {
  constructor() {
    super();
    this.state = {
      base_path: {},
      user_data: {},
      logo_url: {},
      fetch_menu: {}
    };  
  }

  componentDidMount() {
    fetch("http://discoverygarden-vagrant-i8.local/dgi_rest_endpoints/header_resource")
      .then(response => response.json())
      .then(data => {
        this.setState({
          base_path: data.base_path,
          user_data: data.user_data,
          logo_url: data.logo_url,
          fetch_menu: data.fetch_menu
        })
      })
    // Retreive menu item data
    // fetch("http://discoverygarden-vagrant-i8.local/api/menu_items/main")
    //   .then(response => response.json())
    //   .then(data => console.log(data))

    // fetch("http://discoverygarden-vagrant-i8.local/user/1?_format=json", {
    //     credentials: 'include',
    //   })
    //   .then(response => response.json())
    //   .then(data => console.log(data))
      // .then(response => console.log(response))
      // .then(data => console.log(data))
  }

  render() {
    console.log(this.state);
    return (
      <div className="dgi-header">
        <header className="dgi-header fixed">
          
          <div className="grid-item grid-item-left">
            <Logo logoImage={this.state.logo_url} />
          </div>

          <div className="grid-item grid-item-center">
          <Menu fetchMenu={this.state.fetch_menu} />

            <ul className="menu">
              <li>
                <a href="/front">Home</a>  
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/explore">Explore</a>
              </li>
              <li>
                <a href="/help">Help</a>
              </li>
            </ul>
          </div>

          <div className="grid-item grid-item-right">
            <a
            className="dgi-upload"
            href="/upload"
            rel="noopener noreferrer"
            >
            Upload</a>

            <User userlink="/" name="My thingie" userLogo={user_logo}/>
          </div>

        </header>
      </div>
    );
  }
}

export default App;
