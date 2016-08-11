import React from 'react'
import ReactDOM from 'react-dom'

import FoodInput from './subcomponents/foodinput/food.input.js'
import List from './subcomponents/List/list.js'

//SCSS file
import '!style!css!sass!./styleFoodLog.scss'
//import RE-BASE
import Rebase from 're-base'
//RE-BASE FIREBASE URL
const base = Rebase.createClass('https://reactfoodlog.firebaseio.com/')

class FoodLog extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      editText: '',
      editTextID: null,
      foodentry: []
    }
  }
  componentDidMount(){
    //Sync (Two way binding) firebase base data with state data
    base.syncState('food_entries',{
      context: this,
      state: 'foodentry',
      asArray: true
    })
  }
  updateFoodEntry(foodentry){
    this.setState({foodentry})
  }
  handleFoodSubmit(newNote){
    //add items to data
    this.setState({
      foodentry: this.state.foodentry.push([newNote])
    })
  }
  deleteFoodItem(foodItem){
    let item = this.state.foodentry.indexOf(foodItem) //returns the numerical index of foodItem
    console.log(foodItem)
    this.state.foodentry.splice(item,1) //remove item from
    this.setState({ foodentry: this.state.foodentry })
  }
  handleChangeEditText(editItem){
    // console.log('Arguments from handleChangeEditText',editItem, index)
    // console.log('handleChangeEditText says', editItem)
    console.log(editItem, 'onChange Value')
    let editTextValue = editItem
    //console.log('handleChangeEditText says that you want to change the index', editIndexItem)
    //console.log('What value are you editing ?', editItem, this.state.foodentry[this.state.editTextID])
    this.state.foodentry[this.state.editTextID] = editTextValue; // change the updated entry into the new value
    this.setState({foodentry: this.state.foodentry})
    this.state.editText = ''
    this.state.editTextID = null
  }

  editFoodItem(newFood){
    let editfood = newFood
    let editfoodIndex = this.state.foodentry.indexOf(newFood) //grab index number of editfoodIndex
    console.log('The index i am editing is', editfoodIndex, 'from the',editfood)
    this.state.editText = editfood
    this.setState({editText: editfood})
    this.state.editTextID = editfoodIndex
    this.setState({editTextID: editfoodIndex})
    // When a user clicks on the edit button
    //the this function grabs the edit value and edit index number for foodentry
    console.log('EDIT : The state is now ',this.state)
  }
  render(){
    return (

      <div className="menu">
        <div className="logo"></div>
        <div className="logo grayscale"></div>
          <FoodInput updateFoodEntry={this.updateFoodEntry.bind(this)} changeEditText={this.handleChangeEditText.bind(this)} editTextValue={this.state.editText} editID={this.state.editTextID} foodentry={this.state.foodentry} onFoodSubmit={this.handleFoodSubmit.bind(this) }  />
          <List foodnotes={this.state.foodentry} onFoodDelete={this.deleteFoodItem.bind(this)} onFoodEdit={this.editFoodItem.bind(this)} />
      </div>
    )

  }
}

export default FoodLog
