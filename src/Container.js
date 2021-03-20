import React from 'react';

import { Console } from './Console';
import { Stats } from './Stats';

import { StyledContainer, StyledInstructions } from './Style';

import decisions from './Data';

export class Container extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            money: 5,
            health: 15,
            questionIndex: 0,
            career: "",
            dailyIncome: 0,
            gameOver: false,
            win: "",
            instructions: true
        }
    }

    statClick (i) {
        if (i == 0) {
            this.restart();
        } else {
            this.setState({ instructions: true });
        }
    }

    restart () {
        this.setState({
            money: 5,
            health: 10, // maintain 10+
            questionIndex: 0,
            career: "",
            dailyIncome: 0,
            gameOver: false,
            win: "",
        });
    }

    /**
     * decide whether user wins or loses
     * @param i next index
     */
    gameOver (i) {
        if (i == 9) {
            this.setState({ win: "win" })
        } else if (i == 0) {
            this.setState({ win: "lose" })
        }
        this.setState({ gameOver: true });
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
            if (qIndex == 4) return 9;
            if (qIndex == 5) return 9; // nothing happens to children --> win
        } else {
            // not good 
            if (qIndex == 0) return 1; // breaks leg
            if (qIndex == 3) return 0; // you faint - game over 
            if (qIndex == 4) return 5;
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
        // spend money
        if (this.state.questionIndex == 2 || this.state.questionIndex == 3 || this.state.questionIndex == 4) {
            if (this.state.money < price.money) {
                console.log("not enough money");
                this.gameOver(0); 
            }
        }
        let next = price.next;
        if (price.next === -1) {
            next = this.getNext(i);
            if (next == 0) this.gameOver(next);
            if (next == 9) this.gameOver(next);
        } else if (price.next === 0) {
            this.gameOver(price.next)
        } else if (price.next === 9) {
            this.gameOver(price.next)
        } 
        console.log(next);
        if (next < 9 && next > 0) {
            this.setState({
                money: (this.state.money - price.money + this.state.dailyIncome).toFixed(2),
                health: this.state.health - price.health,
                questionIndex: next
            });
        }
        // setTimeout(() => {
        //     console.log(this.state.money)
        // }, 1000)
    }

    render () {
        if (this.state.instructions) {
            return (
                <StyledInstructions>
                    <i>once you click <b>play</b>, you are a single mother struggling to take care of your two children.<br/>
                    you must make difficult decisions that can decide you and your children's fates.</i><br/><br/>
                    for many of these decisions, the ensuing decision you're forced to make is random. it's up to luck. work at a construction site? maybe you get lucky and nothing happens. or you could get injured...<br/><br/>
                    in this simulation, each question = one day. therefore, for each question, your daily income will be added to your money. of course, it's not a perfect simulation, because in reality, you would lose more money every day for food.<br/><br/>
                    you must keep <b>health</b> levels at least 15. if you can't afford to pay for necessary food or rent, you lose. you might also lose due to bad luck. you break your leg - maybe you can find a job, or maybe there are no jobs you can take on without two working legs.<br/><br/>
                    you win if you just happen to be lucky and face "no more struggles." of course, this is not true in the real world, because your poverty doesn't just end like that. 
                    <button onClick={() => {this.setState({ instructions: false })}}>PLAY</button> 
                </StyledInstructions>
            )
        }

        return (
            <StyledContainer>
                <Stats
                    career={this.state.career}
                    income={this.state.dailyIncome}
                    money={this.state.money}
                    health={this.state.health}
                    onClick={(i) => this.statClick(i)}
                />
                {this.state.gameOver ?
                    <Console decisions={false} win={this.state.win}/>
                :
                    <Console
                        decision={true}
                        question={decisions[this.state.questionIndex].question}
                        choices={decisions[this.state.questionIndex].choices}
                        onClick={(i) => this.handleClick(i)}
                    />
                }
            </StyledContainer>
        )
    }
}