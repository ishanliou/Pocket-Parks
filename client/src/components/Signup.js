import React, { Component } from 'react';
import clientAuth from '../clientAuth'

class Signup extends Component{

    state = {
		fields: { name: '', email: '', password: ''}
	}
    onInputChange(evt) {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}

    onUserSignupForm(evt){
        evt.preventDefault()
        console.log('clicked')
        clientAuth.signUp(this.state.fields).then(user => {
			if(user) {
				this.props.onSignUpSuccess(user)
				this.props.history.push('/browseparks')
			} else {
                this.setState({ fields: { name: '', email: '', password: '' } })
            }
		})
    }

    render(){
        const { name, email, password } = this.state.fields
        return(
            <div className="panel-signin-signup">
                <h1 className="SignUp">Sign UP</h1>
                    <form onSubmit={this.onUserSignupForm.bind(this)} onChange={this.onInputChange.bind(this)}>
                        <div className="input-field">
                            <label>Name:</label>
                            <input type="text" name="name" placeholder="Name" value={name}/>
                        </div>

                        <div className="input-field">
                            <label>Email:</label>
                            <input type="text" name="email" placeholder="Email" value={email}/>
                        </div>

                        <div className="input-field">
                            <label>Password:</label>
                            <input type="password" name="password" placeholder="Password" value={password}/>
                        </div>
                        
                        <button className="btn-signin-signup-save">Sign UP</button>
                    </form>


            </div>
        )
    }
}

export default Signup