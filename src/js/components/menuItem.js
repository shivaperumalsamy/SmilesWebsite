import React, { Component } from 'react';
import ContactAnimationObject from '../common/contactpage.js';

{
  /*
     Class Name: MenuIcon
     Return : @component
  */
}
class MenuIcon extends Component{


  constructor(){
    super();
    this.state = {
      isActive : false
    };
  }
  
  addClassTo = (color,isActive) =>{
    let menuHoverEffect = document.getElementById("menu-hover-effect");
    menuHoverEffect.style.background = color;
    if(isActive!=null && isActive === true){
      this.setState({
        isActive : true
      });
    }
  }
  removeClassTo = (color) =>{
    if(this.state.isActive !== true){
      let menuHoverEffect = document.getElementById("menu-hover-effect");
      menuHoverEffect.style.background = "";
    }
	}


  handleClick = () =>{
		ContactAnimationObject.slideIn();
  }
  
	render(){
    const sectionid="#"+this.props.sectionId;
    const flag = (this.props.counter == 4)?true:false;
    if(flag){
      Element = <a onClick = {this.handleClick}></a>;
    }else{
      Element = <a href={sectionid}></a>;
    }
		return(



      <div id={"menuicon-"+this.props.counter} className = "menuBar__menuIcon" onMouseOver={()=>{this.addClassTo("#"+this.props.color)}} 
      onMouseLeave={()=>{this.removeClassTo("#"+this.props.color)}}
      onClick={(e)=>{this.addClassTo("#"+this.props.color,true)}}>
        {Element}

      </div>
     
		);
	}
}

export default MenuIcon;