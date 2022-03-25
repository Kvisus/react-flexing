/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { quotes } from './quotes'
import  './css/App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrog } from "@fortawesome/free-solid-svg-icons";

export default class App extends Component {
  //static propTypes = {second: third}

  /* componentDidUpdate(){
    const color = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.background = "black"; 
  } */

  constructor(props){
    super(props)
    this.state = {
      color:null,
      quoteNumber:null
    }
  }

  handleClick() { 
    return 
  }

  render() {
    const element = <FontAwesomeIcon icon={faFrog} />;
    const randNumChooser =()=> {return Math.floor(Math.random()*quotes.length)};
    let randNum = randNumChooser();
    const colorVariables = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857",
    ];
    const colorChooser = () => {
      return colorVariables[Math.floor(Math.random() * colorVariables.length)];
    }
    let colors = colorChooser();
    //let a = 'style={{ "background-color": colors }}';
    return (
      <div className="wrapper" style={{ "background-color": colors }}>
        {/* {quotes.map(quote=> quote.quote)} */}
        <div className="container">
          
          <div className="quote" style={{ color: colors }}>
            {quotes[randNum].quote}
            {element}
          </div>
          <div className="author" style={{ color: colors }}>
            -{quotes[randNum].author}
          </div>
          <div className="miscHolder">
            <a href="#" style={{ color: colors }}>
              <i class="fa-solid fa-frog"></i>
              Twitter
            </a>
            <a href="#" style={{ color: colors }}>
              Facebook
            </a>
            <button
              className="button"
              onClick={randNum}
              style={{ "background-color": colors }}
            >
              New Quote
            </button>
            
          </div>
        </div>
      </div>
    );
  }
}


