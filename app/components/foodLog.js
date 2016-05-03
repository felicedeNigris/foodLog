import React from 'react'
import ReactDOM from 'react-dom'

import FoodInput from './subcomponents/food.input.js'

class FoodLog extends React.Component{
  render(){
    return (
      <div>
      <h1> Your Food Log App </h1>
      <FoodInput/>
      </div>
    )
  }
}

export default FoodLog
