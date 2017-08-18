import React, { Component } from 'react';
import MenuIcon from './menuItem';

{
  /*
     Class Name: MenuBar
     Return : @component
  */
}

class MenuBar extends Component{

    renderMenu(index, iconName){
    	return(
           <MenuIcon icon = {iconName} value = {iconName}/>
    	);
    } 
	render(){
		return(
			<div className = "menuBar">
  				{this.renderMenu(0, "Home")}
  				{this.renderMenu(1, "About")}
  				{this.renderMenu(2, "Timeline")}
  				{this.renderMenu(4, "Gallary")}
  				{this.renderMenu(5, "Contact us")}
			</div>
		);
	}
}

export default MenuBar;