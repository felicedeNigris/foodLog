import React from 'react'
import ReactDOM from 'react-dom'

import FoodInput from './food.input'
import FoodEntry from './food.entry'

class FoodList extends React.Component{
  render(){
    console.log('food_description is ', this.props,'from Foodlist')

    return (
      <ul>
        <FoodEntry food_description={this.props.food_description}/>
      </ul>
    )
  }
}

export default FoodList
