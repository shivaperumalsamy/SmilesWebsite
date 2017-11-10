import React,{Component} from 'react';
import '../../css/timelinecomponent.css';

class Timelinecomponent extends Component{
    render(){
        return(
            <div className = "timeline-component" >
                <div className = "timeline-date">
                    <p>{this.props.timelineData.month}</p>
                    <p>{this.props.timelineData.date}</p>
                </div>
                <div className = "timeline-content" >
                    {this.props.timelineData.content}
                </div>
            </div>
        )
    }
}
export default Timelinecomponent
/*
                <div className = "timeline-date">
                    <p>{this.props.timelineData.month}</p>
                    <p>{this.props.timelineData.date}</p>
                </div>
                <div className = "timeline-content">
                    {this.props.timelineData.content}
                </div> */