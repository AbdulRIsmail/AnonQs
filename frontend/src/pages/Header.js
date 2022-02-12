import React, { Component } from "react";
import profileIcon from '../images/profile.png';
import chatIcon from '../images/chat.png';
import logoutIcon from '../images/logout.png';

export default class Header extends Component {
  render() {
    return (
      <div className="mt-6" style={{color: 'white', width: '100vw'}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
          <div>
            <p className="inline" style={{fontSize: 32, fontWeight: 'bold', letterSpacing: 1}}>Anon<span style={{color: 'rgb(111, 196, 241)'}}>Qs</span></p>
          </div>
          
          <div style={{justifyContent: 'flex-end'}}>
            <img onClick={() => this.props.switchTab('Profile')} className="inline mr-6" src={profileIcon} width='25px' style={{cursor: 'pointer', marginRight: 18}} alt="Profile Button" />
            <img onClick={() => this.props.switchTab('Chat')} className="inline mr-6" src={chatIcon} width='25px' style={{cursor: 'pointer', marginRight: 18}} alt="Chat Button" />
            <img onClick={this._handleLogoutClick} className="inline" src={logoutIcon} width='25px' style={{cursor: 'pointer'}} alt="Logout Button" />
          </div>
        </div>
      </div>
    );
  }

  _handleLogoutClick = () => {
    // Logout using Twitter passport api
    // Set authenticated state to false in the HomePage component
    window.open("http://localhost:4000/auth/logout", "_self");
    this.props.handleNotAuthenticated();
  };
}