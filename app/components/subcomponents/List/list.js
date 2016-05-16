import React from 'react'
import ReactDOM from 'react-dom'


class List extends React.Component{
  render(){
    console.log(this.props.foodnotes , 'From List.js')
    return (
        <ul>
          {this.props.foodnotes.map((note,index)=>{
            return <li key={index}> {note} </li>
          })}
        </ul>
    )
  }
}

export default List
