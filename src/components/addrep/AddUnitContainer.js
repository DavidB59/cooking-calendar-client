import React from 'react'
import { AddUnit } from './AddUnit'
import { connect } from 'react-redux'
import { addUnit } from '../../actions/recipe'

class AddUnitContainer extends React.Component {
    state= {           
          } 
  onSubmit = () => {
    // event.preventDefault()
    this.props.addUnit(this.state)
  }




  onChange = (event) => {
   this.setState({
      [event.target.name] : event.target.value
   })
  }


  render() {

    return (<div className='login'>
      <AddUnit onSubmit={this.onSubmit} onChange={this.onChange} 
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

export default connect(mapStateToProps, { addUnit })(AddUnitContainer)

    
