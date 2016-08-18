import React from 'react'
import ReactDOM from 'react-dom'


class List extends React.Component{

  editNote(note){
    this.props.onFoodEdit(note)
  }
  render(){
    console.log(this.props, 'props from List.js')
    return (
        <ul className="foodList">
          {this.props.foodnotes.map((note,index)=>{
            return (
              <li key={index}>
                <div className="hov">
                  <div className="x">
                    <p className={'fooditem ' + note.filter(function(item,index){return index > 0}).join(' ')}> {note[0].length > 0 ? note[0] : 'undefined'} </p>
                    <p className="remove" onClick={this.props.onFoodDelete.bind(index,note)}> Delete </p>
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                    <div className="edit" onClick={this.editNote.bind(this, note)}>
                      <p> EDIT </p>
                      <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
    )
  }
}

export default List
