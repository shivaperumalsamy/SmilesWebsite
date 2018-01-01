import React, { Component } from 'react';
import commonObj from '../common/data.js';
import ContactIcon from './contactIcon.js';
import ContactAnimationObject from '../common/contactpage.js';



{
  /*
     Class Name: ContentBar
     Return : @component
  */
}


class Contact extends Component{

		/*
			function Name : renderContactInfo
			return : array of components
		*/
	renderContactInfo = () => {
		let contactInfo = commonObj['contactObj'].map((contact, index)=>{	
            console.log("icon"+contact.icon);
			return <ContactIcon icon = {contact.icon} value = {contact.content} key = {index} />;
			
			
		  });
		
		  return contactInfo;
	
	} 
	handleClick = () =>{
		ContactAnimationObject.slideOut();
	}
		
	render(){
		
		return(
			<div className = "contactBarWrapper">
				<div className = "contactBarWrapper__closeIcon" onClick = {this.handleClick}></div>
				<div className = "contactBarWrapper__contactInfo">
						<div className = "contactHeader page-header">GET IN TOUCH</div>
						{this.renderContactInfo()}
				</div>
			</div>
		);
	}
}

export default Contact;