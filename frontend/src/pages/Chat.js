import React, { Component } from 'react';
import ModalReply from '../components/ModalReply';
import Questions from '../components/Questions';
import axios from 'axios';

export class Chat extends Component {
  state = {
    questions: [
      {
        question: "What macbook would you recommend?",
        date: '01/Jan/2022'
      },
      {
        question: "Did you graduate?",
        date: '02/Jan/2022'
      },
      {
        question: "Do you have any pets?",
        date: '03/Jan/2022'
      },
    ]
  }

  componentDidMount() {
    const screenName = this.props.screenName

    axios.get('http://localhost:4000/questions', { 
      params: {
        screenName: screenName
      } 
    })
    .then(res => {
      console.log(res)
      res.data.forEach((e) => {
        console.log(e)
        if (e.answer === '') this.setState({ questions: [...this.state.questions, e] })
      })

      // this.setState({ questions: res.data })
    });
  }
  
  answerQuestion = async (answer, questionId, questionIndex) => {
    const screenName = this.props.screenName

    axios.post(`http://localhost:4000/answer/question`, { answer, questionId, screenName })
    .then(res => {
      document.getElementById(questionIndex).remove()
      this.setState({ ['show_' + questionId]: false })
    })
  }

  render() {
    const dataOutput = this.state.questions.map((obj, index) => {
      return (
        <div style={{ marginBottom: 32 }} key={obj.id} id={`question_${index}`}>
          <Questions 
            question={obj.question} 
            date={obj.date} 
            onClick={() => this.setState({ ['show_' + obj.id]: true })} 
          />

          <ModalReply 
            question={obj.question} 
            date={obj.date} 
            isOpen={this.state['show_' + obj.id]} 
            onClose={() => this.setState({ ['show_' + obj.id]: false })} 
            onClick={answer => this.answerQuestion(answer, obj.id, `question_${index}`)} 
          />
        </div>
      )
    })

    return (
      <div className="mb-12">
        <div style={{width: 'calc(100%)', margin: '0 auto'}}>
          { dataOutput }
        </div>
      </div>
    )
  }
}

export default Chat
