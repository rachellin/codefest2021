import React from 'react';

import { Decision } from './Decision';
import { StyledConsole, StyledAnswers, StyledChoice } from './Style';

import decisions from './Data';
import testUtils from 'react-dom/test-utils';

export class Console extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            money: 100,
            nutrition: 15, // maintain 10+
            questionIndex: 0,
            career: "",
            dailyIncome: 0,
        }
    }

    /**
     * randomly generate next question index
     * @param i choice index 
     */
    getNext (i) {
        let random = Math.round(Math.random()*2);
        let qIndex = this.state.questionIndex;
        if (random == 0) {
            // good
            if (qIndex == 0) return 2; // no broken leg --> meal time
            if (qIndex == 3) return 4; // you don't faint --> landlord
            if (qIndex == 5) return 9; // nothing happens to children --> win
        } else {
            // not good 
            if (qIndex == 0) return 1; // breaks leg
            if (qIndex == 3) return 0; // you faint - game over 
            if (qIndex == 5) return 0; // children drown? --> game over 
        }
    }
    
    /**
     * after decision is made, update stats as necessary and change question
     * @param i choice index 
     */
    handleClick (i) {
        let price = decisions[this.state.questionIndex].choices[i].price;
        // set career and daily income 
        if (this.state.questionIndex == 0) {
            if (i == 0) {
                this.setState({
                    career: "constructon site",
                    dailyIncome: 2.76
                })
            } else if (i == 1) {
                this.setState({
                    career: "selling rice pudding",
                    dailyIncome: 1.55
                })
            }
        } 
        let next = price.next;
        if (price.next == -1) {
            next = this.getNext(i);
        } else if (price.next == 0) {
            console.log("game over");
        } else if (price.next == 9) {
            console.log("you win");
        } 
        console.log(next)
        if (next < 9 && next > 0) {
            this.setState({
                money: this.state.money - price.money + this.state.dailyIncome,
                nutrition: this.state.nutrition - price.nutrition,
                questionIndex: next
            });
        }
        // setTimeout(() => {
        //     console.log(this.state.money)
        // }, 1000)
    }
    
    render () {
        return (
            <StyledConsole>
                <Decision 
                    question={decisions[this.state.questionIndex].question}
                    choices={decisions[this.state.questionIndex].choices}
                    onClick={(i) => this.handleClick(i)}
                />
            </StyledConsole>
        )
    }
}