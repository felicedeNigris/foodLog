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

    if(options.length <= 0 && this.props.editID === null){
      var newNote = this.refs.foodInput.value
      this.props.onFoodSubmit(newNote)
      this.refs.foodInput.value = ''
    }
    if(options.length > 0 && this.props.editID === null){
      var newNote = []
      newNote.push(this.refs.foodInput.value)
      newNote.push(...options)
      this.props.onFoodSubmit(newNote)
      this.refs.foodInput.value = ''
    }
    console.log('ID from submit', this.props.editID, 'and text from submit is ',this.props.editTextValue)
    if(this.props.editID !== undefined){
      console.log('Is update')
      this.props.changeEditText(this.refs.foodInput.value)
      this.refs.foodInput.value= ''
    }
  }





  //

  render(){
    console.log(this.props, 'from FoodInput')  //returns food_description{foodentry}
    return (
      <div className="inputForm">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="Enter your food item" ref="foodInput" value={this.props.editTextValue} onChange={this.inputChange} />

          <div className="checkbox-wrapper">
            <input type="checkbox" id="check1" ref="checkme1" value="Meat"/> Meat
            <label htmlFor="check1"><span className="fa fa-check"/></label>

            <input type="checkbox" id="check2" ref="checkme2" value="Fowl"/> Fowl
            <label htmlFor="check2"><span className="fa fa-check"/></label>

            <input type="checkbox" id="check3" ref="checkme3" value="Fish"/> Fish
            <label htmlFor="check3"><span className="fa fa-check"/></label>

            <input type="checkbox" id="check4" ref="checkme4" value="Veggie"/> Veggie
            <label htmlFor="check4"><span className="fa fa-check"/></label>

            <input type="checkbox" id="check5" ref="checkme5" value="Vegan"/> Vegan
            <label htmlFor="check5"><span className="fa fa-check"/></label>

            <input type="checkbox" id="check6" ref="checkme6" value="Dairy"/> Dairy
            <label htmlFor="check6"><span className="fa fa-check"/></label>

            <input type="checkbox" id="check7" ref="checkme7" value="Wheat"/> Wheat
            <label htmlFor="check7"><span className="fa fa-check"/></label>

            <input type="checkbox" id="check8" ref="checkme8" value="Gluten Free"/> Gluten Free
            <label htmlFor="check8"><span className="fa fa-check"/></label>
          </div>
          <input type="submit" value="Submit"/>
        </form>
        <div className="form-shadow"></div>
      </div>
    )
  }
}


export default FoodInput
