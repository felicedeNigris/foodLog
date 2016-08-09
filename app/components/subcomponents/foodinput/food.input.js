import React from 'react'
import ReactDOM from 'react-dom'

class FoodInput extends React.Component{
  inputChange(e){
    //This will update the send the input value back
    //to handleEditChange for it to modify
    this.props.changeEditText(e.target.value)
  }

  setRef(ref){
    this.note = ref
  }
  handleSubmit(e){
    e.preventDefault() //ignore default submit
    console.log('The ref value',  this.refs.foodInput.value)
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
    console.log('Length of options in the input field',options,'and length is ', options.length)

    if(options.length <= 0){
      var newNote = this.refs.foodInput.value //if there are no options
      this.props.onFoodSubmit(newNote) //you can just push the description
      this.refs.foodInput.value= '' //reset food ref to blank
    }
    if(options.length > 0){
      //if options are entered in the form
      //append options to newNote. Thus 1st index will be new food item
      //and anything after the 1st index of newNote will be an option
      var newNote = []
      newNote.push(this.refs.foodInput.value)
      newNote.push(...options)
      console.log('the new foodItem with options are',newNote)
      //add new food item with food options
      this.props.onFoodSubmit(newNote)
      this.refs.foodInput.value= '' //reset food ref to blank
    }
    console.log('ID from submit', this.props.editID, 'and text from submit is ',this.props.editTextValue)
    if(this.props.editID !== undefined){
      console.log('Is update')
      this.props.changeEditText(this.refs.foodInput.value)
      this.refs.foodInput.value= ''
    }
    else{
      console.log('This is not an edit')
      this.props.onFoodSubmit(newNote)
      this.refs.foodInput.value = ''
    }
  }

  render(){
    console.log(this.props, 'from FoodInput')  //returns food_description{foodentry}
    return (
      <div className="inputForm">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="Enter your food item" ref="foodInput" value={this.props.editTextValue} onChange={this.inputChange} />

          <div class="checkbox-wrapper">
            <input type="checkbox" id="check1" ref="checkme1" value="Meat"/> Meat
            <label for="check1"><span className="fa fa-check"/></label>

            <input type="checkbox" id="check2" ref="checkme2" value="Fowl"/> Fowl
            <label for="check2"><span className="fa fa-check"/></label>

            <input type="checkbox" id="check3" ref="checkme3" value="Fish"/> Fish
            <label for="check3"><span className="fa fa-check"/></label>

            <input type="checkbox" id="check4" ref="checkme4" value="Veggie"/> Veggie
            <label for="check4"><span className="fa fa-check"/></label>

            <input type="checkbox" id="check5" ref="checkme5" value="Vegan"/> Vegan
            <label for="check5"><span className="fa fa-check"/></label>

            <input type="checkbox" id="check6" ref="checkme6" value="Dairy"/> Dairy
            <label for="check6"><span className="fa fa-check"/></label>

            <input type="checkbox" id="check7" ref="checkme7" value="Wheat"/> Wheat
            <label for="check7"><span className="fa fa-check"/></label>

            <input type="checkbox" id="check8" ref="checkme8" value="Gluten Free"/> Gluten Free
            <label for="check8"><span className="fa fa-check"/></label>

            <input type="submit" value="Submit"/>
          </div>

        </form>
        <div className="form-shadow"></div>
      </div>
    )
  }
}


export default FoodInput
