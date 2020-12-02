import React, { Component } from 'react'

import loadingGIF from "../../../static/assets/giphy.gif"

export default class Quiz extends Component {
    constructor() {
        super()

        this.state = {
            data: [],
            currentQuestion: 0,
            score: 0,
            isLoading: true,
            error: false
        }

        this.handleAnswer = this.handleAnswer.bind(this)
    }

    componentDidMount() {
        fetch("http://127.0.0.1:5000/question/get")
        .then(response => response.json())
        .then(data => {
            this.setState({
                data: data,
                isLoading: false

            })
        })
        .catch(error => {
            console.log(error)
            this.setState({
                error: true,
                isLoading: false
            })

        })
    }

    getQuestion() {
        const currentQuestion = this.state.data[this.state.currentQuestion]
        return currentQuestion.text
    }

    handleAnswer(answerValue) {
        this.setState({
            score: this.state.score + answerValue,
            
        })

        if (this.state.currentQuestion === this.state.data.length -1) {
            this.props.history.push("/results")
        }
        else {
            this.setState({
                currentQuestion: this.state.currentQuestion + 1
            })
        }
    }

    render() {
        return (
            <div className='quiz-wrapper'>
                {this.state.isLoading 
                    ? <div className="loading-wrapper">
                        <h2>Loading...</h2>
                        <img src={loadingGIF} alt=""/>
                        </div>
                    : this.state.error
                        ?<h2>An error occured...</h2>
                        : <div className="question-wrapper">
                                <h3>{this.getQuestion()}</h3>
    
                                <button onClick={() => this.handleAnswer(1)}>Yes</button>
                                <button onClick={() => this.handleAnswer(3)}>No</button>
                                <button onClick={() => this.handleAnswer(2)}>Sometimes</button>
                          </div>
                }
            </div>
        )}
    }
