import React from 'react'
import ReactDOM from 'react-dom'


class List extends React.Component{

  render(){
    console.log(this.props, 'props from List.js')
    return (
        <ul>
          {this.props.foodnotes.map((note,index)=>{
            return <li key={index}> {note} <button value="fart" onClick={this.props.onFoodDelete.bind(index,note)}> Delete </button> </li>
          })}
        </ul>
    )
  }
}

export default List
