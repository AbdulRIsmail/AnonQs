import React, { Component } from 'react';
import avatarIcon from '../images/avatar.png';

export class Answers extends Component {
  render() {
    return (
      <div style={{background: '#2f3137', padding: 15, maxWidth: 890, margin: '0 auto'}}>
        <div style={{display: 'flex', flexDirection: 'row', textAlign: 'left'}}>
          <div style={{background: '#158fd1', position: 'relative', minWidth: 50, minHeight: 50, maxWidth: 50, maxHeight: 50, borderRadius: 50/2}}>
            <img src={avatarIcon} style={{width: 25, position: 'absolute', top: '25%', left: '25%'}} alt="Profile Icon" />
          </div> 

          <div>
            <h1 className="ml-4" style={{fontSize: 16, fontWeight: '500', letterSpacing: 1}}>Anonymous</h1>
            <h1 className="ml-4" style={{fontSize: 13, color: 'gray', letterSpacing: 1}}>{this.props.date}</h1>
          </div>          
        </div>

        <div className="sm:mt-4" style={{textAlign: 'left'}}>
          <p style={{fontSize: 16, display: 'inline-block'}}>{this.props.question}</p>
        </div>

        <hr className="mt-2" style={{background: '#232529', borderColor: '#232529'}} />

        <div className="sm:mt-4" style={{textAlign: 'left'}}>
          <p style={{fontSize: 16, display: 'inline-block'}}>{this.props.answer}</p>
        </div>

        {/* <div style={{textAlign: 'left', marginTop: 5}}> */}
          {/* <p style={{fontSize: 14, background: '#232529', display: 'inline-block',  borderRadius: 5, padding: '8px 60px', cursor: 'pointer'}} onClick={this.props.onClick}>Edit</p> */}
        {/* </div> */}
      </div>
    )
  }
}

export default Answers
