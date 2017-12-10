import React, { Component } from 'react';
import '../../css/homeScreen.css';
import  MenuBar from '../components/menuBar';
import ContentBar from '../components/contentBar';
import  GalleryComponent from '../components/GalleryComponent';
import commonObj from '../common/data.js';
import ScrollableAnchor from 'react-scrollable-anchor';
import Carousel from './CarouselScreen';
import AboutScreen from './AboutScreen';
import TimelineScreen from './TimelineScreen';


{
  /*
     Class Name: HomeScreen
     Return : @component
  */
}
class HomeScreen extends Component {
  render() {
    return (  
    <div>	
       <MenuBar/>
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
      {/* <ScrollableAnchor id={commonObj.sectionIds[4]}>
        <div className="height-100vh">
        </div>
      </ScrollableAnchor> */}
    </div> 
    );
  }
}

export default HomeScreen;