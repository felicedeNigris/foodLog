import React from 'react'
import ReactDOM from 'react-dom'


class List extends React.Component{
  editChangeSubmit(e){
    e.preventDefalut()
    let editFood = e.target.value;

  }
  renderEditForm(index,note){
    return (
      <form onSubmit={this.props.onFoodEdit.bind(index,note)}>
        <input type="text" placeholder={note}/>
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
