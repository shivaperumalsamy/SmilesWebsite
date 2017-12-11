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

		/*
			function Name : renderMenu
			return : array of components
		*/
	renderMenu = () => {
		let menuItems = commonObj['menuItems'].map((menu, index)=>{		
			console.log(index+""+commonObj.sectionIds[index]);	
			return <MenuIcon icon = {menu.icon} color={menu.color} value = {menu.name} counter={index} key = {index} sectionId={commonObj.sectionIds[index]}/>	

		  });
		
		  return menuItems;
	
    } 
	render(){
		
		return(
			<div>
			<div id = "menu-hover-effect"></div>
			<div className = "menuBar">
				{this.renderMenu()}
			</div>
			</div>
		);
	}
}

export default MenuBar;