import React, { Component } from 'react';
import axios from 'axios';
import Answer from '../components/Answers';

export class Profile extends Component {
  state = {
    answers: []
  }

  componentDidMount() {
    const screenName = this.props.screenName

    axios.get('http://localhost:4000/answers', { 
      params: {
        screenName: screenName
      }
    })
    .then(res => {
      res.data.forEach((e) => {
        if (e.answer !== '') this.setState({ answers: [...this.state.answers, e] })
      })
    });
  }
  

  render() {
    const dataOutput = this.state.answers.map((obj, index) => {
      return (
        <div className="mb-8" key={obj.id} id={`question_${index}`}>
          <Answer 
            question={obj.question}
            answer={obj.answer}
            date={obj.date} 
          />
        </div>
      )
    })

    return (
      <div>
        <h1>Profile!</h1>
        { dataOutput }
      </div>
    )
  }
}

export default Profile