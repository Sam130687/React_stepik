import React from 'react';

// don't change the Component name "App"
export default class App extends React.Component {
  constructor() {
      super();
      this.state = {
        email: '',
        isAgreeWithTerms: false,
    };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
}

  handleChangeCheckbox = (event) => {
    this.setState({[event.target.name]: event.target.checked})
  }

  clickSend = () => {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = this.state.email;
    if(reg.test(address) == false) {
        alert('Введите корректный e-mail');
        return;
    }

    if(!this.state.isAgreeWithTerms){
      alert('Согласись с рассылкой, чел')
      return;
    }

    alert('Все замечательно, ты красава');

    this.setState({email: '', isAgreeWithTerms: false})
  }

  render() {
    // TODO: implement component
    const { email, isAgreeWithTerms } = this.state;

        return (
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={this.handleChange}
                />
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isAgreeWithTerms"
                        checked={isAgreeWithTerms}
                        onChange={this.handleChangeCheckbox}
                    />
                    I agree with terms and conditions
                </label>
                <br />
                <button onClick={this.clickSend}>Send</button>
            </div>
        );
  }
}