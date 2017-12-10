import React, { Component } from 'react';
import throttle from 'lodash.throttle';
import TimelineComponent from '../components/TimelineComponent.js';
import '../../css/timelinescreen.css';
import data from '../../data/timelineScreenData.json';
import timelineline from '../../assets/img/timelineline.svg';
import Scroll from '../components/scroll.js';
import scrollFunctionalityObject from '../common/scrollFunctionality.js';


/*
    Class Name: TimelineScreen
    Return : @component
*/

class TimelineScreen extends Component{

    constructor(props){
        super(props);
        this.onResize = this.onResize.bind(this);
        this.throttleResize = throttle(this.onResize,400);
        this.state = {
            noOfElements : this.calculateNoOfElements(),
            flag : 1
        }
    }
    componentDidMount() {
        window.addEventListener('resize', this.throttleResize);
   }
    componentWillUnmount() {
        window.removeEventListener('resize', this.throttleResize);
    }
    onResize() {
        this.setState({
            noOfElements : this.calculateNoOfElements()
        })
    }
    calculateNoOfElements() {
        let width = window.innerWidth;
        console.log("width = "+ width);
        if(width < 610) return 1;
        else if(width < 930) return 2;
        else if(width < 1260) return 3;
        else return 4;
    }
    renderTimelineComponents(){
        let elements = [];
        let noOfElements = this.state.noOfElements * this.state.flag;
        for (let i=0; i < noOfElements; i++) {
            console.log("hi");
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

                <div className = "timeline-viewpane" id = "timeline-viewpane">

                    <div className= "timeline-line"><img src={timelineline} className="timeline-line-svg" alt="logo" /></div>
                    {this.renderTimelineComponents()}
                    
                </div>
                <Scroll></Scroll>
              
            </div>
        )
    }

}

export default TimelineScreen;