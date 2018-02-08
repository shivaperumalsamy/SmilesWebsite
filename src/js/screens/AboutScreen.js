import React, { Component } from 'react';
import '../../css/aboutscreen.css';
import data from '../../data/aboutScreenData.json';
import Utility from '../common/utility';
import aboutImage from '../../assets/img/aboutImage.jpg';

/*
    Class Name: AboutScreen
    Return : @component
*/

class AboutScreen extends Component{

    constructor(){
        super();
        this.state = {
            timelineData : []
        };
    }
    updateContent = (response) =>{
        console.log(response);
        this.setState({
            timelineData : response.data
        });
        console.log(this.state.timelineData);
    }

    componentDidMount(){
        Utility.hitTheService('https://sirius-smiles-cms.herokuapp.com/AboutScreen',this.updateContent);
    }
    render() {
        return ( 
            <div className="wrapper_AboutHeaderandContent">
            <div className = "contentHeader page-header"> <p className = "page-header">What we do?</p></div>
            <div className = "wrapper_aboutwrapper">
                <div className = "about_area">
                    
                    <div className = "content page-content">
                        {this.state.timelineData.aboutContent}
                    </div>
                </div>
                <div className = "about_photo">
                    <img src={this.state.timelineData.aboutImage} alt="about"/>
                </div>
            </div>
            </div>
        );
      }

}
export default AboutScreen;