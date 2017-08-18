import React, { Component } from 'react';
import '../../css/homeScreen.css';
import  MenuBar from '../components/menuBar';
import ContentBar from '../components/contentBar';

{
  /*
     Class Name: HomeScreen
     Return : @component
  */
}
class HomeScreen extends Component {
  constructor(){
    super();
    this.state = {
        contentObj : {
          headerContent : null,
          mainContent : null
        } 
      }
     // this.populateData = this.populateData.bind(this); 
  }
  // populateData = {() =>
  //   this.setState ({
  //     contentObj : {
  //       headerContent : "lorem ipsum",
  //       mainContent : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  //     }
  //   });
  //  } 
  render() {
    return ( 
    <div>	
      <MenuBar/>
      <ContentBar/>
    </div> 
    );
  }
}

export default HomeScreen;