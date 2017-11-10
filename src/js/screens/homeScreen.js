import React, { Component } from 'react';
import '../../css/homeScreen.css';
import  MenuBar from '../components/menuBar';
import ContentBar from '../components/contentBar';
import  GalleryComponent from '../components/GalleryComponent';
import commonObj from '../common/data.js';
import ScrollableAnchor from 'react-scrollable-anchor';
import Carousel from './CarouselScreen';
import AboutScreen from './AboutScreen';
<<<<<<< HEAD
import TimelineScreen from './TimelineScreen';
=======
>>>>>>> 8d0b1568dd285124d51204133392f9cce5d9e281

{
  /*
     Class Name: HomeScreen
     Return : @component
  */
}
class HomeScreen extends Component {
  
  state = {
        contentObj : {
          headerContent : null,
          mainContent : null
        } 
      }  
  /* 
      Service call to fetch the content 
  */
  componentWillMount = () => {
    this.setState ({
      contentObj : {
        headerContent : "lorem ipsum",
        mainContent : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      }
    });
   } 
// content bar from section 1 is removed, it is ain't supposed to be there. i.e is about screen   
//<ContentBar  contentObj={this.state.contentObj}/>
  render() {
    return (  
    <div>	
<<<<<<< HEAD
      <MenuBar/>
      <ScrollableAnchor id={commonObj.sectionIds[0]}>
        <Carousel active="1" className="height-100vh">
        </Carousel>
      </ScrollableAnchor>
      <ScrollableAnchor id={commonObj.sectionIds[1]}>
        <div className="height-100vh" id="section2">
          <AboutScreen />
        </div>
=======
       <MenuBar/>
       <ScrollableAnchor id={commonObj.sectionIds[0]}>
       <Carousel active="1" className="height-100vh">
      </Carousel>
       </ScrollableAnchor>
       <ScrollableAnchor id={commonObj.sectionIds[1]}>
      <div className="height-100vh">
        <AboutScreen/>
       </div>
>>>>>>> 8d0b1568dd285124d51204133392f9cce5d9e281
      </ScrollableAnchor>
      <ScrollableAnchor id={commonObj.sectionIds[2]}>
        <div className="height-100vh">
          <TimelineScreen />
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={commonObj.sectionIds[3]}>
<<<<<<< HEAD
        <div className="height-100vh">
        </div> 
=======
      <div className="height-100vh">
        <GalleryComponent/>
      </div> 
>>>>>>> 8d0b1568dd285124d51204133392f9cce5d9e281
      </ScrollableAnchor>
      <ScrollableAnchor id={commonObj.sectionIds[4]}>
        <div className="height-100vh">
        </div>
      </ScrollableAnchor>
       
    </div> 
    );
  }
}

export default HomeScreen;