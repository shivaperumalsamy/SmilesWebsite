import React, { Component } from 'react';
import MenuIcon from './menuItem';
import commonObj from '../common/data.js';

{
  /*
     Class Name: MenuBar
     Return : @component
  */
}

class MenuBar extends Component{

	renderMenu = () => {
		let menuItems = commonObj['menuItems'].map((menu, index)=>{			
			return <MenuIcon icon = {menu.icon} value = {menu.name} key = {index}/>	
		  });
		
		  return menuItems;
	
    } 
	render(){
		
		 
		return(
			<div className = "menuBar">
				{this.renderMenu()}
			</div>
		);
	}
}

export default MenuBar;