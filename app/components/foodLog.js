import React from 'react'
import ReactDOM from 'react-dom'

import FoodInput from './subcomponents/foodinput/food.input.js'
import List from './subcomponents/List/list.js'

class FoodLog extends React.Component{
  constructor(){
    super()
    this.state = {
      foodentry: ['Chili Cheese Dog', 'Pizza', 'lasagna']
    }
  }
  updateFoodEntry(foodentry){
    this.setState({foodentry})
  }
  handleFoodSubmit(e){
    //add items to data
    this.state.foodentry.concat(e)
    this.setState({foodentry})
  }
  render(){
    return (
      <div>
      <h1> Your Food Log App </h1>
      <FoodInput updateFoodEntry={this.updateFoodEntry.bind(this)} foodentry={this.state.foodentry} onFoodSubmit={this.handleFoodSubmit}/>
      <List foodnotes={this.state.foodentry} />
      </div>
    )

  }
}

export default FoodLog
