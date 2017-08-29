import React, { Component } from 'react';

{
  /*
     Class Name: MenuIcon
     Return : @component
  */
}
class MenuIcon extends Component{

	render(){
    const sectionid="#"+this.props.sectionId;
		return(
      <a href={sectionid}><div className = "menuBar__menuIcon"/></a> 
		);
	}
}

export default MenuIcon;