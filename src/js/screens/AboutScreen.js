import React, { Component } from 'react';
import '../../css/aboutscreen.css';
import data from '../../data/aboutScreenData.json';
import aboutImage from '../../assets/img/aboutImage.jpg';

/*
    Class Name: AboutScreen
    Return : @component
*/

class AboutScreen extends Component{

    render() {
        return ( 
            <div className = "wrapper_aboutwrapper">
                <div className = "about_area">
                    <div className = "contentHeader"> What we do?</div>
                    <div className = "content">
                        {data.aboutContent}
                    </div>
                </div>
                <div className = "about_photo">
                    <img src={aboutImage} alt="about"/>
                </div>
            </div>

        );
      }

}
export default AboutScreen;