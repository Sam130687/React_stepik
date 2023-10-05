import React from "react";

class Form extends React.Component {
    state = {
        firstName: '',
        email:'',
        message: '',
        select: '',
        subscriber: false,
        gender:'male',
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    validateName = () => {
        if (this.state.firstName.length < 5) {
            alert('You first name can\'t be less then 5 letters');
        }
    }

    handleChangeCheckbox = (event) => {
        this.setState({[event.target.name]: event.target.checked})
    }

    render() {
        const {firstName, email, message, select, subscriber, gender } = this.state;

        return <div>
            <input
                type="text"
                name="firstName"
                placeholder="firstName"
                value={firstName}
                onChange={this.handleChange}
                onBlur={this.validateName}
            />
            <input
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={this.handleChange}
            />
            <br />
            <textarea 
                name="message"
                value={message}
                onChange={this.handleChange}
            />
            <br/>
            <select
                name="select"
                value={select}
                onChange={this.handleChange}
            >
                <option value = "" disabled></option>
                <option value = "1">1</option>
                <option value = "2">2</option>
                <option value = "3">3</option>
            </select>
            <br/>
            <input 
                type= "checkbox" 
                name= "subscriber" 
                checked={subscriber}
                onChange={this.handleChangeCheckbox}
                />
            <br />
            <input type="radio" name="gender" value="male" onChange={this.handleChange} checked={gender === "male"}/> male 
            <input type="radio" name="gender" value="female" onChange={this.handleChange} checked={gender === "female"}/> female
        </div>
    }
}

export {Form}