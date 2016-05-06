import React from 'react'
import ReactDOM from 'react-dom'

import FoodInput from './subcomponents/foodinput/food.input.js'

class FoodLog extends React.Component{
  constructor(){
    super()
    this.state = {
      foodentry: 'Chili Cheese Dog'
    }
  }
  updateFoodEntry(foodentry){
    this.setState({foodentry})
  }
  render(){
    return (
      <div>
      <h1> Your Food Log App </h1>
      <FoodInput updateFoodEntry={this.updateFoodEntry.bind(this)} foodentry={this.state.foodentry} />
      </div>
    )
  }
}

export default FoodLog
