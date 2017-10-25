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
      <div className = "menuBar__menuIcon"><a href={sectionid}></a></div>
		);
	}
}

export default MenuIcon;