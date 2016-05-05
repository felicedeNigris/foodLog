import React from 'react'
import ReactDOM from 'react-dom'

//import FoodList
import FoodList from './food.list.js'

class FoodInput extends React.Component{

  inputChange(e){
    let newfood = e.target.value
    this.props.updateFoodEntry(newfood)
  }
  render(){
    //this.props.updateFoodEntry("Pizza")//foodentry = Pizza
    console.log(this.props, 'from FoodInput') //returns food_description{foodentry  caloryentry}
    return (
      <div>
        <form>
          <label> Food Entry:</label>
          <input type="text" placeholder="Meat Pie" onChange={this.inputChange.bind(this)} />
          <label> Includes: </label>
          <input type="checkbox" label="meat"/>meat
          <input type="checkbox" label="fowl"/>fowl
          <input type="checkbox" label="fish"/>fish
          <input type="checkbox" label="veggie"/>veggie
          <input type="checkbox" label="vegan"/>vegan
          <input type="checkbox" label="dairy"/>dairy
          <input type="checkbox" label="wheat"/>wheat
          <input type="checkbox" label="gluten-free"/>gluten-free
          <input type="submit" value="Submit" onSubmit={this.inputChange.bind(this)} />
        </form>
        <FoodList foodlistitem={'hrrr'} />
      </div>
    )
  }
}

FoodInput.defaultProps = {
  caloryentry: null
}

FoodInput.propTypes = {
  foodentry: React.PropTypes.string.isRequired,
  caloryentry: React.PropTypes.number
}

export default FoodInput
