import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './Header';
import Login from './Login';
import Profile from './Profile';
import Chat from './Chat';

export class Home extends Component {
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      profileImageUrl: PropTypes.string,
      twitterId: PropTypes.string,
      screenName: PropTypes.string,
      _id: PropTypes.string
    })
  };

  state = {
    user: {},
    activeTab: 'Profile',
    error: null,
    authenticated: false
  };

  switchTab = (tab) => {
    this.setState({ activeTab: tab })
  }

  componentDidMount() {
    fetch('http://localhost:4000/auth/login/success', {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true
      }
    })
    .then(response => {
      if (response.status === 200) return response.json();
      throw new Error('failed to authenticate user');
    })
    .then(responseJson => {
      this.setState({
        authenticated: true,
        user: responseJson.user
      });
    })
    .catch(error => {
      this.setState({
        authenticated: false,
        error: 'Failed to authenticate user'
      });
    });
  }
  

  render() {
    const { authenticated, activeTab } = this.state;
    return (
      <div>
        <div>
          {authenticated ? (
          <div>
              <Header switchTab={this.switchTab} />
            
              <div className="text-white text-center mt-24 text-3xl">
                {activeTab === 'Profile' ? (
                  <Profile screenName={this.state.user.screenName} />
                ) : (
                  <Chat screenName={this.state.user.screenName} />
                )}
              </div>
            </div>
          ) : (
            <Login />
          )}
        </div>
      </div>
    )
  }

// <Header authenticated={authenticated} handleNotAuthenticated={this._handleNotAuthenticated} />
// <h2 style={{color: 'rgb(56,56,56)'}}>Welcome <span style={{color: 'rgb(111, 196, 241)'}}>{this.state.user.name}</span>!</h2> 
// <p className="inline" onClick={this._handleLogoutClick}>Logout</p>

  _handleNotAuthenticated = () => {
    this.setState({ authenticated: false });
  };
}

export default Home
