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

    render () {
        return (
            <div>
            <h1>{this.props.question}</h1>
                <StyledAnswers>
                    {this.generateChoices()}
                </StyledAnswers>
            </div>
        )
    }
}