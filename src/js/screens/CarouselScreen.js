import React, { Component } from 'react';
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
        }
        this.leftClick = this.moveLeft.bind(this)
        this.rightClick = this.moveRight.bind(this)
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
        console.log("active state ",this.state.active)
        console.log("datum",data[this.state.active])
        return <Slide key={this.state.active} imgData={data[this.state.active]} />
    }
    //Function to silde left
    moveLeft() {
        clearInterval(this.timer)
        console.log("move left")
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
        console.log("move right")
        let newActive = this.state.active
        this.setState({
            active: (newActive + 1) % data.length
        })
        this.timer = setInterval(this.rightClick, 5000);
    }
    
    render() {
        console.log("Carousel.js render")

        return(
            <div className="carouselViewpane">
                <button className="navButton navL" onClick={this.leftClick}><i className="fi-arrow-left"></i></button>
                <CSSTransitionGroup 
                    transitionName='slider'
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    {this.renderSlide()}
                </CSSTransitionGroup>
                <button className="navButton navR" onClick={this.rightClick}><i className="fi-arrow-right"></i></button>
            </div>
        )
    }
}
export default Carousel;
