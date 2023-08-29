import { Component } from "react";
import { Layout } from "./Layout";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countFeedbacks = (feedback) =>{
    this.setState(prevState =>({
     [feedback] : prevState[feedback] + 1,
    }))
  }


  render(){
    // const feedback = Object.keys(this.state);
    // const { good, neutral, bad } = this.state;


    return (
    <Layout>

    <h3>Please leave feedback</h3>
    <div>
    <button onClick={this.countFeedbacks}>Good</button>
    <button>Neutral</button>
    <button onClick={this.countFeedbacks}>Bad</button>
    </div>

    <div>
      <h3>Statistics</h3>

      <div>
      <span>Good: {this.state.good}</span>
      <span>Neutral: {this.state.neutral}</span>
      <span>Bad: {this.state.bad}</span>
      </div>
    </div>

    </Layout>
     
  );}
};
