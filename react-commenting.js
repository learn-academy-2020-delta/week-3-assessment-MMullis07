// ASSESSMENT 3: React Commenting Challenge

// Add comments to the React Dice Roller Challenge
// Explain the purpose and functionality of the code on the line DIRECTLY below the 10 comment tags


// src/App.js

import React, { Component } from 'react'
// 1) The purpose of the code below is to import the class Dice as a component. The "./" means it is in the same directory. This allows us import all the coding, formatting, and functionality of that component in our app by simpy using "<Dice />".
import Dice from './Dice'
import Log from './Log'

import dice from '../assets/dice.png'
import dice1 from '../assets/dice-1.png'
import dice2 from '../assets/dice-2.png'
import dice3 from '../assets/dice-3.png'
import dice4 from '../assets/dice-4.png'
import dice5 from '../assets/dice-5.png'
import dice6 from '../assets/dice-6.png'

class Board extends Component{
  constructor(props){
    super(props)
    // 2) This.state allows you add additional info that doesn't participate in the data flow. It reprensents rendered values. It also can be changed and updated. We can attach setState to say a button down below and when we click it, it could update this.state.currentPic to a picture of a stop sign if it the functionality is there.
    this.state = {
      rollImages: [dice1, dice2, dice3, dice4, dice5, dice6],
      currentPic: dice,
      diceLog: []
    }
  }

  handleRoll = () => {
    // 3) THe functionality and purpose of the code below is to take our state objects and destructure them. This allows us to only need the state name ie "rollImages" and "diceLog". If we do not do this then we will always have to call back to them using "this.state.rollImages"
    let { rollImages, diceLog } = this.state
    let randomNum = Math.ceil(Math.random() * rollImages.length)
    // 4) The code below creates a new variable "newRoll" and passes the destructured state object "rollImages" with the index of "randomNum" this tells us that any time we call newRoll a random image of a dice will be generated.
    let newRoll = rollImages[randomNum]
    // 5) this.setState is a way to update the state objects and generate the newly updated state on the screen. currentPic: newRoll will cause the current picture to be update to the new image. While the diceLog will take the spread operator to iterate over the entire ever growing array of dice rolls. It wil then take the newRoll and add that as the most recent roll in the dice log. 
    this.setState({ currentPic: newRoll, diceLog: [... diceLog, newRoll] })
  }

  render(){
    const { currentPic, diceLog } = this.state
    return(
      <div id="board-container">
        {/* // 6) 
        The div tag creates a new section/block/container in which all code within that tag will take place. Assigning it an id allows you stylize the container and everything within in at one time./*/}
        <Dice
          roll={ this.handleRoll }
          currentPic={ currentPic }
        />
        <Log
          diceLog={ diceLog }
        />
      </div>
    )
  }
}

export default Board



// src/component/Dice.js

import React, { Component } from 'react'

class Dice extends Component{
  // 7) Render controls the content of the container being passed in. It fetches or gets the data witin the container. Everything passsed within the render container will be generated.
  render(){
    // 8) The functionality and purpose of the line of code below is very similar to destructuring state objects. However, because we are now on a component file it becomes a prop. We normally would have to call/reference them as such "this.props.currentPic". However we can destructure that the same way as "this.state" that way we only need the object's name in this case "currentPic" and "roll".
    const { currentPic, roll } = this.props
    return(
      <div id="dice-container">
        <h2>Click to Roll</h2>
        <img
          id="dice-img"
          // 9) 
          //The "img" tag allows up to upload an image to the app at this spot. There is also an id for the dice-img that way we can easily style only this particular item either eith CSS or in-line styling. You cannot use id on more than one item.
          alt="images of dice"
          // 10) 
          //This decribes the image to users who cannot see it either due to browser issues or those who are visually impaired and utilize screen readers 
          src={ currentPic }
          onClick={ roll }
        />
      </div>
    )
  }
}

export default Dice
