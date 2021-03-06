import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {signup} from '../../actions/auth'
import SignupForm from './SignupForm'
import {Redirect} from 'react-router-dom'

class SignupFormContainer extends PureComponent {
	handleSubmit = (data) => {
		this.props.postSignup(data)
	}

	render() {
		if (this.props.signup.success) return <Redirect to='/login' />

		return (<div className='signupForm'>
				<SignupForm onSubmit={this.handleSubmit} signup={this.props.signup}/>
				<p style={{color:'red'}}>{ this.props.signup.error }</p>
			</div>)
	}
}

const mapStateToProps = (state) => ({
	signup: state.signup
})

export default connect(mapStateToProps, {postSignup: signup})(SignupFormContainer)
