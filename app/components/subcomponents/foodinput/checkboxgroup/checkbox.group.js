import React from 'react'
import ReactDOM from 'react-dom'


class CheckBoxGroup extends React.Component{
  render(){
    // console.log('Props from CheckBoxGroup ',this.props)
    return(
      <div>
        {this.props.options.map(function(option){
          return(
            <span key={option.value}>
              <input type="checkbox" value={option.value} label={option.label} /> {option.label}
            </span>
          )
        })}
      </div>
    )
  }
}

export default CheckBoxGroup
