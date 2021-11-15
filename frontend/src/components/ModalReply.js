import React, { useState } from 'react';
import Modal from 'react-modal';
import avatarIcon from '../images/avatar.png';
import closeIcon from '../images/close.png';

const customStyles = {
  overlay: {
    background: 'rgb(33, 35, 40)'
  },

  content : {
    color: 'white',
    background: '#2f3137',
    border: 'none',
    height: '100%',
    maxWidth: '750px',
    width: '100%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

function ModalReply(props) {
  const { question, date, onClick, isOpen, onClose } = props
  const [answer, setAnswer] = useState('')

  return (
    <div>
      <Modal 
          isOpen={isOpen}
          onRequestClose={onClose}
          style={customStyles}
        >

        <div style={{display: 'flex', flexDirection: 'row', textAlign: 'left'}}>
          <div style={{background: '#158fd1', position: 'relative', minWidth: 50, minHeight: 50, maxWidth: 50, maxHeight: 50, borderRadius: 50/2}}>
            <img src={avatarIcon} style={{width: 25, position: 'absolute', top: '25%', left: '25%'}} alt="Profile Icon" />
          </div> 

          <img onClick={onClose} src={closeIcon} style={{width: 15, cursor: 'pointer', position: 'absolute', top: '20px', right: '20px'}} alt="Close Icon" />

          <div>
            <h1 className="ml-4" style={{fontSize: 16, fontWeight: '500', letterSpacing: 1}}>Anonymous</h1>
            <h1 className="ml-4" style={{fontSize: 13, color: 'gray', letterSpacing: 1}}>{date}</h1>
          </div>          
        </div>

        <div style={{textAlign: 'left'}}>
          <p style={{fontSize: 16, display: 'inline-block', marginTop: 10}}>{question}</p>
        </div>

        <hr className="mt-2" style={{background: '#232529', borderColor: '#232529'}} />

        <textarea onChange={e => setAnswer(e.target.value)} value={answer} style={{color: '#bfbfbf', marginTop: 5, fontSize: 16, width: '100%', padding: 5, outline: 'none', background: 'none'}} rows="10" placeholder="Type Your Answer..." />

        <div style={{textAlign: 'left', background: 'lightgreen'}}>
          <p onClick={() => onClick(answer)} style={{fontSize: 14, background: '#232529', position: 'absolute', bottom: 0, right: 0, margin: 20, verticalAlign: 'bottom', borderRadius: 5, padding: '8px 60px', cursor: 'pointer'}}>Answer</p>
        </div>
      </Modal>
    </div>
  )
}

export default ModalReply
