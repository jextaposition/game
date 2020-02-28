import React, {Component} from 'react';
import Platform from './Platform'

const initialState = {
  speed: 200,
  direction:'RIGHT',
  platformDots:{
    left: 0,
    top: 0
  }
}
class App extends Component {
  state = initialState;

  componentDidMount(){
    setInterval(this.moveplatformDots, this.state.speed);
    document.onkeydown = this.onKeyDown;
  }
  onKeyDown = (e) => {
    e = e || window.event
    switch (e.keyCode) {
      case 37:
        this.setState({direction:'LEFT'})
        break;
      case 39:
      this.setState({direction:'RIGHT'})
      break;
    }
  }
  moveplatformDots = () => {
    let newDirection;
    switch(this.state.direction){
      case 'RIGHT':
      newDirection = { top: 0, left: 1, direction: 'RIGHT'};
      break;
      case 'LEFT':
      newDirection = {top:0, left: -1, direction: 'LEFT'}
      default:
      return;
    }
    this.setState({
      direction: newDirection
    })
  }
  increaseSpeed(){
    if(this.state.speed > 10){
      this.setState({
        speed: this.state.speed - 10
      })
    }
  }

  render(){
    return(
      <div>
      <h1>Platform Game</h1>
      <div className="game-area">
      <Platform platformDots={this.state.platformDots}/>
      </div>
      </div>
    )
  }
}
export default App;
