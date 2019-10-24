import React, { Component } from 'react';

function menuItem() {
    return (
        <li>
          <a></a>
        </li>
    )
}

class Menu extends Component {
	constructor() {
		super()
		this.state = {
			menu_items: {}
		}
	}
	componentDidMount() {
		
		fetch(this.props.fetchMenu)
		.then(response => response.json())
		.then(data => {
			this.setState({
				menu_items: data
			})
		})
	}
  render() {
  	console.log(this.state)
  	const menuItems = ""
    return (
      <div className="main-menu">
        <ul className="menu">
        </ul>
      </div>
    )
  }
}

export default Menu;