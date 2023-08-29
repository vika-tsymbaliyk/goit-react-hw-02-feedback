import { Component } from "react";
import { Layout } from "./Layout";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistic } from "./Statistics/Statistics";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (option) =>{
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      };
  });
  }


  render(){
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;


    return (
    <Layout>
    <Section title= "Please leave feedback">
    <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback}/>
    </Section>

    <Section title="Statistics">
    <Statistic good={good} neutral={neutral} bad={bad} />
    </Section>
    

    </Layout>
     
  );}
};
