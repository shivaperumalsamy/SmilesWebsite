import React, { Component } from 'react';
import TimelineComponent from '../components/TimelineComponent.js';
import '../../css/timelinescreen.css';
import data from '../../data/timelineScreenData.json';
import timelineline from '../../assets/img/timelineline.svg';
import Scroll from '../components/scroll.js';


/*
    Class Name: TimelineScreen
    Return : @component
*/

/*
                    <div className = "timeline-component-wrapper">
                        <div className = "timeline-line"><img src={timelineline} className="timeline-line-svg" alt="logo" /></div>
                        {this.renderTimelineComponents()}
                    </div> */

class TimelineScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
            noOfElements : 4,
            flag : 1
        }
    }
    renderTimelineComponents(){
        let elements = [];
        let noOfElements = this.state.noOfElements * this.state.flag;
        for (let i=0; i < noOfElements; i++) {
            elements.push(<TimelineComponent   key={i} timelineData = {data[i]}/>);
        }
        return elements
        
    }
    render(){
        return(
            <div className = "wrapper-timelinewrapper">
                <div className = "timeline-header">
                    <div className = "timeline-heading"> TimeLine </div>
                </div>
               
                <div className = "timeline-viewpane">
                    <div className= "timeline-line"><img src={timelineline} className="timeline-line-svg" alt="logo" /></div>
                    {this.renderTimelineComponents()}
                   
                </div>
                <Scroll></Scroll>
            </div>
        )
    }

}

export default TimelineScreen;