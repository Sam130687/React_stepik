import React from "react";

class Form extends React.Component {
    constructor(){
        super();
        this.state = {
            card:'',
            email:'',
        }
        this.cardRef = React.createRef();
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    validateName = () => {}

    componentDidMount(){
        console.log(this.cardRef)
        this.cardRef.current.focus();
    }

    render() {
        const {card, email } = this.state;

        return <div>
            <input
                type="text"
                name="card"
                placeholder="card"
                value={card}
                onChange={this.handleChange}
                onBlur={this.validateName}
                ref={this.cardRef}
            />
            <input
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={this.handleChange}
            />
        </div>
    }
}

export {Form}