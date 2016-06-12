import React from 'react'
import ReactDOM from 'react-dom'

import FoodInput from './subcomponents/foodinput/food.input.js'
import List from './subcomponents/List/list.js'

//SCSS file
import '!style!css!sass!./test.scss'

class FoodLog extends React.Component{
  constructor(){
    super()
    this.state = {
      foodentry: ['Chili Cheese Dog', 'Pizza', 'Falaffel']
    }
  }
  updateFoodEntry(foodentry){
    this.setState({foodentry})
  }
  handleFoodSubmit(newNote){
    //add items to data
    this.state.foodentry.push(newNote) //add input field to array
    this.setState({foodentry: this.state.foodentry}) //finally set new value to array
  }
  deleteFoodItem(foodItem){
    let item = this.state.foodentry.indexOf(foodItem) //returns the numerical index of foodItem
    console.log(foodItem)
    this.state.foodentry.splice(item,1) //remove item from
    this.setState({ foodentry: this.state.foodentry })
  }
  editFoodItem(foodItem){
    let item = this.state.foodentry.indexOf(foodItem) //returns the numerical index of the foodItem
    console.log("You selected this foodItem with editFoodItem: ", foodItem, "item number", item)
  }
  render(){
    return (
      <div>
      <h1> Your Food Log App </h1>
      <FoodInput updateFoodEntry={this.updateFoodEntry.bind(this)} foodentry={this.state.foodentry} onFoodSubmit={this.handleFoodSubmit.bind(this)}  />
      <List foodnotes={this.state.foodentry} onFoodDelete={this.deleteFoodItem.bind(this)} onFoodEdit={this.editFoodItem.bind(this)} />
      </div>
    )

  }
}

export default FoodLog
