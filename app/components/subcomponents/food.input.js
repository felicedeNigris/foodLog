import React from 'react'
import ReactDOM from 'react-dom'

//import FoodList
import FoodList from './food.list.js'

class FoodInput extends React.Component{
  render(){
    return (
      <div>
        <form>
          <label> Food Entry:</label>
          <input type="text" placeholder="Meat Pie"/>
          <label> Includes: </label>
          <input type="checkbox" label="meat"/>meat
          <input type="checkbox" label="fowl"/>fowl
          <input type="checkbox" label="fish"/>fish
          <input type="checkbox" label="veggie"/>veggie
          <input type="checkbox" label="vegan"/>vegan
          <input type="checkbox" label="dairy"/>dairy
          <input type="checkbox" label="wheat"/>wheat
          <input type="checkbox" label="gluten-free"/>gluten-free
          <label> Calories: </label>
          <input type="text" placeholder="Enter you calories"/>
          <input type="submit" value="Submit"/>
        </form>
        <FoodList/>
      </div>
    )
  }
}

export default FoodInput
