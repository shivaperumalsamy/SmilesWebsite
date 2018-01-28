import React, { Component } from 'react';
import throttle from 'lodash.throttle';
import TimelineComponent from '../components/TimelineComponent.js';
import '../../css/timelinescreen.css';
import data from '../../data/timelineScreenData.json';
import timelineline from '../../assets/img/timelineline.svg';
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
    componentDidUpdate(){
        console.log("component did update in timeline screen");
        if(this.state.noOfElements * this.state.flag > data.length){
            console.log("condition for hiding right");
            let scrollRightElement = document.getElementsByClassName('scrollContainer__scrollRight')[0];
            let scrollLeftElement = document.getElementsByClassName('scrollContainer__scrollLeft')[0];
            scrollRightElement.style.display = 'none';
            scrollLeftElement.style.display = 'block';
        }
        if((this.state.flag -1) * this.state.noOfElements == 0){
            console.log("condition for hiding left");
            let scrollRightElement = document.getElementsByClassName('scrollContainer__scrollRight')[0];
            let scrollLeftElement = document.getElementsByClassName('scrollContainer__scrollLeft')[0];
            scrollRightElement.style.display = 'block';
            scrollLeftElement.style.display = 'none';
        }
    }
    componentDidMount() {
        window.addEventListener('resize', this.throttleResize);
        this.componentDidUpdate();
   }
    componentWillUnmount() {
        console.log("component unmounting");
        window.removeEventListener('resize', this.throttleResize);
    }
    onResize() {
        this.setState({
            noOfElements : this.calculateNoOfElements()
        });
        console.log("in resize after setting state = "+this.state.noOfElements);
    }
    calculateNoOfElements() {
        let width = window.innerWidth;
        console.log("width = "+ width);
        console.log("data length = "+ data.length);
        switch (data.length){
            case 0 : return 0;
            case 1 : return 1;
            case 2 : {
                if(width < 610) return 1;
                else return 2;
            }
            case 3 : {
                if(width < 610) return 1;
                else if(width < 930) return 2;
                else return 3;
            }
            case 4 : {
                if(width < 610) return 1;
                else if(width < 930) return 2;
                else if(width < 1260) return 3;
                else return 4;
            }
            default : {
                if(width < 610) return 1;
                else if(width < 930) return 2;
                else if(width < 1260) return 3;
                else return 4;
            }
            }
        }
        /*if(width < 610) return 1;
        else if(width < 930) return 2;
        else if(width < 1260) return 3;
        else return 4;*/
    renderTimelineComponents(){
        let elements = [];
        let noOfElements = this.state.noOfElements * this.state.flag;
        if(noOfElements > data.length)
        noOfElements = data.length;
        
        console.log("loop limits = ",((this.state.flag -1) * this.state.noOfElements),noOfElements)
        for (let i= ((this.state.flag -1) * this.state.noOfElements); i < noOfElements; i++) {
            elements.push(<TimelineComponent key={i} timelineData = {data[i]}/>);
        }
        console.log("render timeline components called = "+ elements);
        return elements   
    }
    handleClick(variable){
        console.log("inside handle click = "+this.state.flag,variable);
        this.setState({
            flag: (this.state.flag + variable)
        });
        console.log("inside handle click = "+this.state.flag);
    }
    render(){
        return(
            <div className = "wrapper-timelinewrapper">
                <div className = "timeline-header">
                    <div className = "timeline-heading page-header"> Through the years </div>
                </div>
                <div className = "timeline-viewpane" id = "timeline-viewpane">
                    <div className= "timeline-line"><img src={timelineline} className="timeline-line-svg" alt="logo" /></div>
                    {this.renderTimelineComponents()}   
                    <div className = "scrollContainer">          
                        <i className="fa fa-arrow-right scrollContainer__scrollRight" aria-hidden="true" onMouseOver = {()=>this.handleClick(1)}></i>
                        <i className="fa fa-arrow-left scrollContainer__scrollLeft" aria-hidden="true"  onMouseOver = {()=>this.handleClick(-1)}></i>
                    <div className = "clear"></div>
                </div>
                </div> 
            </div>
        )
    }
}

export default TimelineScreen;