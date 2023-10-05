import React from "react";

class Form extends React.Component {
    constructor(){
        super();

        this.cardRef = React.createRef();
        this.emailRef = React.createRef();
    }

    componentDidMount(){
        this.cardRef.current.value = 'Default name';
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if(this.cardRef.current.value.length < 16){
            alert('length < 16')
            return
        }
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <input
                type="text"
                name="card"
                placeholder="card"
                ref={this.cardRef}
            />
            <input
                type="email"
                name="email"
                placeholder="email"
                ref={this.emailRef}
            />
            <button>Send</button>
        </form>
    }
}

export {Form}