import React from 'react'
import ReactDOM from 'react-dom'

import FoodInput from '../food.input'

class FoodList extends React.Component{
  render(){
    console.log('food_description is ', this.props.foodlistitem,'from Foodlist')
    return (
      <ul>
        <li>
          <h3> {this.props.foodlistitem.foodentry} </h3>
        </li>
      </ul>
    )
  }
}

export default FoodList


// <FoodEntry food_description={this.props.food_description}/>
