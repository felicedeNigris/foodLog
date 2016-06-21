import React from 'react'
import ReactDOM from 'react-dom'

class FoodInput extends React.Component{
  //this.props.onFoodSubmit({item: foodentry, includes: options });
  inputChange(e){
    let newfood = e.target.value
    this.setState({text: newfood})
  }
  setRef(ref){
    this.note = ref
  }
  handleSubmit(e){
    e.preventDefault() //ignore default submit
    console.log(this.refs.foodInput.value)
    var options = []

    if(this.refs.checkme1.checked === true){
      options.push(this.refs.checkme1.value)
    }
    if(this.refs.checkme2.checked === true){
      options.push(this.refs.checkme2.value)
    }
    if(this.refs.checkme3.checked === true){
      options.push(this.refs.checkme3.value)
    }
    if(this.refs.checkme4.checked === true){
      options.push(this.refs.checkme4.value)
    }
    if(this.refs.checkme5.checked === true){
      options.push(this.refs.checkme5.value)
    }
    if(this.refs.checkme6.checked === true){
      options.push(this.refs.checkme6.value)
    }
    if(this.refs.checkme7.checked === true){
      options.push(this.refs.checkme7.value)
    }
    if(this.refs.checkme8.checked === true){
      options.push(this.refs.checkme8.value)
    }
    console.log(options)

    if(options.length <= 0){
      var newNote = this.refs.foodInput.value
    }
    else{
      var newNote = []
      newNote.push(this.refs.foodInput.value)
      newNote.push(...options)
    }
    this.props.onFoodSubmit(newNote)
    this.refs.foodInput.value = ''
  }

  render(){
    ///console.log(this.props, 'from FoodInput') //returns food_description{foodentry }
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label> Food Entry:</label>
          <input type="text" placeholder="Meat Pie" ref="foodInput" onChange={this.inputChange.bind(this)} />
          <label> Includes: </label>
          <input type="checkbox" ref="checkme1" value="Meat"/> Meat
          <input type="checkbox" ref="checkme2" value="Fowl"/> Fowl
          <input type="checkbox" ref="checkme3" value="Fish"/> Fish
          <input type="checkbox" ref="checkme4" value="Veggie"/> Veggie
          <input type="checkbox" ref="checkme5" value="Vegan"/> Vegan
          <input type="checkbox" ref="checkme6" value="Dairy"/> Dairy
          <input type="checkbox" ref="checkme7" value="Wheat"/> Wheat
          <input type="checkbox" ref="checkme8" value="Gluten Free"/> Gluten Free
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}


// FoodInput.propTypes = {
//   foodentry: React.PropTypes.string.isRequired,
// }

export default FoodInput
