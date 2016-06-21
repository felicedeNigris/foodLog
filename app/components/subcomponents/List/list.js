import React from 'react'
import ReactDOM from 'react-dom'


class List extends React.Component{
  constructor(){
    super()
    this.state = {
      edit: ''
    }
  }
  editSubmit(){
    // note.preventDefault()
    // console.log('Submit values are', index)
    console.log('EditValue is ', this.state.edit)
    // this.props.onFoodEdit.bind(this.state.edit)
    // let editFood = e.target.value;

  }
  editInputChange(e){
    let editNewFood = e.target.value
    this.state.edit = editNewFood;
    this.setState({edit: this.state.edit})
    console.log('Edit new food ', editNewFood, 'and state is ', this.state.edit)
  }
  renderEditForm(index,note){
    return (
      <form onSubmit={this.editSubmit.bind(index,note)}>
        <input type="text"  ref="editFood" onChange={this.editInputChange.bind(this)}/>
      </form>
    )
  }
  render(){
    console.log(this.props, 'props from List.js')
    return (
        <ul>
          {this.props.foodnotes.map((note,index)=>{
            return (<li key={index}>{note}
              <button onClick={this.props.onFoodDelete.bind(index,note)}> Delete </button>
              <button onClick={this.renderEditForm.bind(this)}> EDIT </button>
                {this.renderEditForm(index,note)}

              </li>)
          })}
        </ul>
    )
  }
}

export default List
