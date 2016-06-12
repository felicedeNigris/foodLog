import React from 'react'
import ReactDOM from 'react-dom'


class List extends React.Component{
  constructor(){
    super()
    this.state = {
      isEditing: false
    }
  }
  onEdit(index,note){
    if(this.state.isEditing === false){
      this.setState({isEditing: true})
      console.log(this.props.foodnotes, 'from Edit click')
    }else{
      this.setState({isEditing: false})
    }
    console.log('Editing : ',this.state.isEditing)
  }
  renderEditFood(){
    if(this.state.isEditing === true){
      return(
        <form onSubmit={this.props.onFoodEdit.bind(this)}>
          <input type="text"/>
        </form>
      )
    }
  }
  renderEditButton(){
    if(!this.state.isEditing){
      return <button onClick={this.onEdit.bind(this)}> Edit </button>
    }
  }
  renderSaveButton(){
    if(this.state.isEditing){
      return <button> Save </button>
    }
  }
  renderCancelButton(){
    if(this.state.isEditing){
      return <button onClick={this.onEdit.bind(this)}> Cancel </button>
    }
  }
  render(){
    console.log(this.props, 'props from List.js')
    return (
        <ul>
          {this.props.foodnotes.map((note,index)=>{
            return (<li key={index}>{note}
               <button onClick={this.props.onFoodDelete.bind(index,note)}> Delete </button>
               {this.renderEditButton()}
               <button onClick={this.props.onFoodEdit.bind(index,note)}> EDIT2 </button>
               {this.renderEditFood()}
               {this.renderSaveButton()}
               {this.renderCancelButton()}
              </li>)
          })}
        </ul>
    )
  }
}

export default List


// {this.props.onFoodEdit.bind(index,note)}
