import React from 'react';

import { Choice } from './Choice';
import { StyledAnswers } from './Style';

import decisions from './Data';

export class Decision extends React.Component {
    generateChoices () {
        let arr = [];
        let choice;
        for (let i = 0; i < this.props.choices.length; i++) {
            choice = <Choice 
                title={this.props.choices[i].title}
                desc={this.props.choices[i].desc}
                onClick={() => this.props.onClick(i)}
            />
            arr.push(choice);
        }
        return arr;
    }
    // every choice has a price: money, nutrition, etc

    render () {
        return (
            <div>
            <h1>{this.props.question}</h1>
                <StyledAnswers>
                    {/* <Choice title="choice 1" desc="description"/>
                    <Choice title="choice 2" desc="description"/> */}
                    {this.generateChoices()}
                </StyledAnswers>
            </div>
        )
    }
}