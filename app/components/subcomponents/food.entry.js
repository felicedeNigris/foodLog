import React from 'react'
import ReactDOM from 'react-dom'


class FoodEntry extends React.Component{
  render(){
    console.log('Props from FoodEntry ',this.props)

    return (
        <li>
          <h2>Hello </h2>
        </li>
    )
  }
}

export default FoodEntry
