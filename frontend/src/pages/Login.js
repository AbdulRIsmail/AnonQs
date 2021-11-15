import React, { Component } from 'react'
import logo from '../images/logo.png';

export class Login extends Component {
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', minWidth: '100vw', textAlign: 'center', color: 'white', verticalAlign: 'top', fontSize: 18}}>
        <div style={{width: '100%', marginBottom: 200}}>
          <div style={{marginBottom: 50}}>
            <img src={logo} width='150px' style={{display: 'block', margin: '0 auto'}} alt="Logo Icon" />
            <p style={{fontSize: 72, fontWeight: 'bold', letterSpacing: 1}}>Anon<span style={{color: 'rgb(111, 196, 241)'}}>Qs</span></p>
            <p style={{color: '#BFBFBF', marginTop: -15}}>Ask Questions Anonymously</p>
          </div>
          <p onClick={this._handleSignInClick} style={{width: 'calc(100% - 50%)', background: '#1D1E22', padding: '20px 0', margin: '25px 10px', display: 'inline-block', cursor: 'pointer', borderRadius: 6}}>Continue with Twitter</p>
          <p style={{width: 'calc(100% - 50%)', background: '#1D1E22', padding: '20px 0', margin: '0 10px', display: 'inline-block', cursor: 'pointer', borderRadius: 6}}>Continue with Instagram</p>
        </div>
      </div>
    )
  }

  _handleSignInClick = () => {
    // Authenticate using via passport api in the backend
    // Open Twitter login page
    window.open("http://localhost:4000/auth/twitter", "_self");
  };
}

export default Login
