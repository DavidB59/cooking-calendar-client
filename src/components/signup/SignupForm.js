import React, { PureComponent } from 'react'
import './SignupForm.css'

export default class SignupForm extends PureComponent {
    state = {
        adultsNumber: 0,
        childrensNumber: 0
    }

    onClick1 = () => {
        this.setState({
            adultsNumber: this.state.adultsNumber + 1
        })
    }

    onClick2 = () => {
        if (this.state.adultsNumber < 1) return 0
        this.setState({
            adultsNumber: this.state.adultsNumber - 1
        })
    }

    onClick3 = () => {
        this.setState({
            childrensNumber: this.state.childrensNumber + 1
        })
    }

    onClick4 = () => {
        if (this.state.childrensNumber < 1) return 0
        this.setState({
            childrensNumber: this.state.childrensNumber - 1
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    handleClick = (e) => {
        e.preventDefault()
    }

    render() {
        console.log(this.state)
        return (            
            <div className='signup'>
                <b>Welcome to planet friendly meal planner!</b>
                <p>We’re excited to design a menu that fits your lifestyle and preferences and that helps our planet!</p>
                <p>When you’re finished taking the quiz below, we’ll plan you incredible meals that will be personalized!</p>
                <p>You can change this information any time.</p>
                <p>Let's start?</p>

                    <form onClick={this.handleClick} >
                        <b>How many people you cook for?</b>
                        <hr/>
                        <p> ADULT <button onClick={this.onClick2}> - </button> {this.state.adultsNumber}  <button onClick={this.onClick1}> + </button></p>
                        <p> CHILDREN <button onClick={this.onClick4}> - </button> {this.state.childrensNumber} <button onClick={this.onClick3}> + </button></p>
                    </form>

                <div>
                    <b>PERSONAL DETAILS</b>
                    <hr/>
                    <form onSubmit={this.handleSubmit}>                    
                        <label>First name:<input type="text" name="firstName" value={this.state.firstName || ''} onChange={this.handleChange} /></label>
                        <label>Last name:<input type="text" name="lastName" value={this.state.lastName || ''} onChange={this.handleChange} /></label><br />
                        <label>Email:<input type="email" name="email" value={this.state.email || ''} onChange={this.handleChange} /></label><br />
                        <label>Password:<input type="password" name="password" value={this.state.password || ''} onChange={this.handleChange} /></label><br />
                        <label>Confirm password:<input type="password" name="confirmPassword" value={this.state.confirmPassword || ''} onChange={this.handleChange} /></label><br />
                        {
                            this.state.password &&
                            this.state.confirmPassword &&
                            this.state.password !== this.state.confirmPassword &&
                            <p style={{ color: 'red' }}>The passwords do not match!</p>
                        }
                        <button type="submit">CREATE ACCOUNT</button>                    
                    </form>
                </div>
                
            </div>
        )
    }
}