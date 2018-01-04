import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { CSSTransitionGroup } from 'react-transition-group'

import Slide from '../components/Slider.js';

import data from '../../data/carouseldata.json';

import  '../../css/carouselscreen.css';

class Carousel extends Component{ 
    constructor(props) {
        super(props);
        this.state = {
            items: ['hello', 'world', 'click', 'me'],
            active: this.props.active,
            image:[] 
        }
        this.leftClick = this.moveLeft.bind(this)
        this.rightClick = this.moveRight.bind(this)
        this.moveToSlide = this.moveToSlide.bind(this)
      }
    componentDidMount() {
        this.timer = setInterval(this.rightClick, 5000);
        window.addEventListener('keydown', this.onKeydown);
   }

    componentWillUnmount() {
        clearInterval(this.timer);
        window.removeEventListener('keydown', this.onKeydown);
    }

    //fucntion to handle < and > keys
    onKeydown = (e) => {
        const { keyCode } = e;
        var leftArrow = keyCode === 37;
        var rightArrow = keyCode === 39;
        if(leftArrow) 
            this.moveLeft(); 
        else if(rightArrow)
            this.moveRight();
    }
    //Renders the main slide
    renderSlide() {
        //console.log("active state ",this.state.active)
        //console.log("datum",data[this.state.active])
        return <Slide key={this.state.active} imgData={data[this.state.active]} />
    }
    //Function Name: componentWillMount()
    //Description: Returns the Data retrieved from the node module.
    componentWillMount(){
        axios({
            method:'get',
            url:'https://sirius-smiles-cms.herokuapp.com/CarouselData',
            auth:{
                user: 'siva',
                password: 'P@ssw0rd'
            }
          }).then(function (response) {
    console.log("Response hey :" + response);
  })
  .catch(function (error) {
    console.log(error);
  });

    }
    //Function to silde left
    moveLeft() {
        clearInterval(this.timer)
        let newActive = this.state.active
        newActive--
        this.setState({
            active: newActive < 0 ? data.length - 1 : newActive
        })
        this.timer = setInterval(this.rightClick, 5000);
    }
    //Function to silde right
    moveRight() {
        clearInterval(this.timer)
        let newActive = this.state.active
        this.setState({
            active: (newActive + 1) % data.length
        })
        this.timer = setInterval(this.rightClick, 5000);
    }

    removePreviousLegendClick = () => {
        var clickedSlide = document.getElementsByClassName("circle");
        for(let i=0;i<clickedSlide.length;i++){
            clickedSlide[i].parentNode.removeChild(clickedSlide[i]);
        }
    }


    /**
     * On clicking legend button, the corresponding carousel image has to be shown.
     * Handling the legend buton click event
     * @param {*} index 
     */
    moveToSlide(index) {
        clearInterval(this.timer)
        let newActive = index
        this.setState({
            active: (newActive + 1) % data.length
        })
        this.removePreviousLegendClick();
        for(let i=0;i<data.length;i++){
            if(i === index){
                var htmlCircleSpan=React.createElement('span',{className:"circle"},'');
                ReactDOM.render(htmlCircleSpan,document.getElementById("legend_"+index));
            }
        }
        this.timer = setInterval(this.rightClick, 5000);
    }

    
    renderLegendButtons = () =>{
        let legendbtns = data.map((data,index)=>{
          return  <li className="legend-button" id={'legend_'+index} key={index} data-carousel-active={index} onClick={this.moveToSlide.bind(this,index)}></li>
        })
        return legendbtns;
    }
    
    render() {

        return(
            <div className="carouselViewpane">
                <CSSTransitionGroup transitionName='slider'
                transitionEnterTimeout={5}
                    transitionLeaveTimeout={-1}>
                    {this.renderSlide()}
                </CSSTransitionGroup>
                <ul className = "legend-buttons-wrapper">
                    {this.renderLegendButtons()}
                </ul>
            </div>
        )
    }
}
export default Carousel;
