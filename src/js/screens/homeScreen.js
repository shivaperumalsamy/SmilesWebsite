import React, { Component } from 'react';
import '../../css/homeScreen.css';
import  MenuBar from '../components/menuBar';
import  GalleryComponent from '../components/GalleryComponent';
import commonObj from '../common/data.js';
import ScrollableAnchor from 'react-scrollable-anchor';
import Carousel from './CarouselScreen';
import AboutScreen from './AboutScreen';
import TimelineScreen from './TimelineScreen';
import Contact from '../components/contact';
import '../../css/contact.css';
import Footer from '../components/footer';
import ContactAnimationObject from '../common/contactpage.js';
import { BounceLoader } from 'react-spinners';


/*
     Class Name: HomeScreen
     Return : @component
*/
class HomeScreen extends Component {

  constructor(props){
		super(props);
		this.state = {
      loading: true,
			flag : 0,
			prevMenuId : null
		}
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500); // simulates an async action, and hides the spinner
  }

 /*
	  function Name: handleClick  
	  description : Toggles the Contact component

	*/
	handleClick = (counter) =>{
	  	if(this.state.flag === 0 && counter === 4){
        ContactAnimationObject.slideIn();
        this.state.flag = 1;
		  }else if(counter!== 4){
        ContactAnimationObject.slideOut();
        this.state.flag = 0;
		  }else{
        ContactAnimationObject.slideOut();  
        this.state.flag = 0;
		  }
		
    }
  /*
     function Name : setBorder
     description: Sets border for the menu icon
  */
  setBorder = (id,color)=>{
    
     if(this.state.prevMenuId !== null){
              let prev = document.getElementById(this.state.prevMenuId);
              console.log(prev);
              prev.style.borderLeft = "";
              console.log(prev);
              
      }  
      let element = document.getElementById(id);
      element.style.borderLeft = "5px solid "+color;
      this.setState({prevMenuId: id});
}

  render() {
    const { loading } = this.state;
    
    if(loading) { 
      return <div className = "bounce-loader">
                <BounceLoader size={100} color={'#FFC0CB'} loading={true} />
             </div> 
    }
    return (  
    <div>	
       <MenuBar onClick = {this.handleClick} setBorder={this.setBorder} index = "1"></MenuBar>
       <Contact onClick = {this.handleClick} index = "1"></Contact>
       <ScrollableAnchor id={commonObj.sectionIds[0]}>
          <Carousel active="1" className="height-100vh">
          </Carousel>
       </ScrollableAnchor>
       <ScrollableAnchor id={commonObj.sectionIds[1]}>
          <div className="height-100vh">
            <AboutScreen/>
          </div>
      </ScrollableAnchor>
        <ScrollableAnchor id={commonObj.sectionIds[2]}>
          <div className="height-100vh">
            <TimelineScreen />
          </div>
        </ScrollableAnchor>
      <ScrollableAnchor id={commonObj.sectionIds[3]}>
        <div className="height-100vh">
        <GalleryComponent/>
      </div> 
      </ScrollableAnchor>
      <Footer/>
    </div> 
    );
  }
}

export default HomeScreen;