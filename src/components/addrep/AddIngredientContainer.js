import React from 'react'
import { AddIngredient } from './AddIngredient'
import { connect } from 'react-redux'
import { addIngredient } from '../../actions/recipe'

class AddIngredientContainer extends React.Component {
    state= {           
          } 
  onSubmit = () => {
    // event.preventDefault()
    this.props.addIngredient(this.state)
  }




  onChange = (event) => {
   this.setState({
      [event.target.name] : event.target.value
   })
  }


  render() {

    return (<div className='login'>
      <AddIngredient onSubmit={this.onSubmit} onChange={this.onChange} 
      values={this.state}
      />
      <p style={{color:"red"}}>{this.props.error}</p>
    </div>)
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  error: state.login.error
})

export default connect(mapStateToProps, { addIngredient })(AddIngredientContainer)

    
