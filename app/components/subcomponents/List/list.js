import React from 'react'
import ReactDOM from 'react-dom'


class List extends React.Component{
  // deleteFoodItem(foodItem){
  //   let item = this.state.foodentry.indexOf(foodItem) //returns the numerical index of foodItem
  //   console.log(foodItem)
  //   // this.state.foodentry.splice(item,1) //remove item from
  //   // this.setState({ foodentry: this.state.foodentry })
  // }
  render(){
    console.log(this.props, 'props from List.js')
    //console.log(this.props.foodnotes , 'From List.js')

    return (
        <ul>
          {this.props.foodnotes.map((note,index)=>{
            return <li key={index}> {note} <button value="fart" onClick={this.props.onFoodDelete.bind(this)}> Delete </button> </li>
          })}
        </ul>
    )
  }
}

export default List
