import React from 'react'
import ReactDOM from 'react-dom'

//import FoodList
import FoodList from './foodlist/food.list.js'
//import CheckBoxGroup
import CheckBoxGroup from './checkboxgroup/checkbox.group.js'

class FoodInput extends React.Component{
  //this.props.onFoodSubmit({item: foodentry, includes: options });
  handleSubmit(e){
    e.preventDefault()
    let item = this.props.foodentry
    let includes = this.state.checkOptions
    this.props.handleFoodSubmit('hello')
  }
  inputChange(e){
    let newfood = e.target.value
    this.props.updateFoodEntry(newfood)
  }
  render(){
    //this.props.updateFoodEntry("Pizza")//foodentry = Pizza
    console.log(this.props, 'from FoodInput') //returns food_description{foodentry }

    const checkOptions = [
      {value: 'meat', label: 'Meat'},
      {value: 'fowl', label: 'Fowl'},
      {value: 'fish', label: 'Fish'},
      {value: 'veggie', label: 'Veggie'},
      {value: 'vegan', label: 'Vegan'},
      {value: 'dairy', label: 'Dairy'},
      {value: 'wheat', label: 'Wheat'},
      {value: 'glutenfree', label: 'Gluten Free'}
    ]
    return (
      <div>
        <form>
          <label> Food Entry:</label>
          <input type="text" placeholder="Meat Pie" value={this.props.foodentry} onChange={this.inputChange.bind(this)} />
          <label> Includes: </label>
          <CheckBoxGroup options={checkOptions}/>
          <input type="submit" value="Submit" onSubmit={this.handleSubmit} />
        </form>
      </div>
    )
  }
}

FoodInput.defaultProps = {
  // caloryentry: null
}

FoodInput.propTypes = {
  foodentry: React.PropTypes.string.isRequired,
  // caloryentry: React.PropTypes.number
}

export default FoodInput
