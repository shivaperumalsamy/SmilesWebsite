import React, { Component } from 'react';
import ContactAnimationObject from '../common/contactpage.js';

{
  /*
     Class Name: MenuIcon
     Return : @component
  */
}
class MenuIcon extends Component{

  handleClick = () =>{
		ContactAnimationObject.slideIn();
  }
  
	render(){
    const sectionid="#"+this.props.sectionId;
    console.log(this.props.counter);
    const flag = (this.props.counter == 4)?true:false;
    if(flag){
      Element = <a onClick = {this.handleClick}></a>;
    }else{
      Element = <a href={sectionid}></a>;
    }
		return(

      <div className = "menuBar__menuIcon">
          {Element}
      </div>
     
		);
	}
}

export default MenuIcon;