import React from 'react';

import { Decision } from './Decision';
import { StyledConsole } from './Style';

export class Console extends React.Component {

    render () {
        return (
            <StyledConsole>
                {this.props.decision ?
                    <Decision 
                        question={this.props.question}
                        choices={this.props.choices}
                        onClick={(i) => this.props.onClick(i)}
                    />
                :
                    <>
                        <h1>you {this.props.win}!</h1>
                            in reality, for people living in poverty, it's not a simple win or lose, and decisions are affected by more factors.<br/>
                            however, we hope that this game gave you some insight into the difficult decisions that the poor must make to survive.<br/>
                            As of 2020, about half of the world’s population live on or live with less than $2.50 in a day.
                            <h2>why does poverty exist?</h2>
                            <ul>
                                <li>not enough jobs to go around at the bottom of the labor market</li>
                                <li>limited access to clean water, education, etc.</li>
                                <li>widening wealth gap that keep the poor poor or make them poorer</li>
                                <li>natural disasters destroying homes</li>
                                <li>corrupt governments</li>
                            </ul>
                            <h2>how can you help?</h2>
                            <ul>
                                <li>
                                    donate: <a href="https://peopleagainstpoverty.com/get-involved/donate/">People Against Poverty</a>,&nbsp;
                                    <a href="https://donate.worldvision.org/give/poverty-in-america">World Vision</a>
                                </li>
                                <li>
                                    volunteer: <a href="https://www.unicef.org/careers/volunteers-unicef">UNICEF</a>,&nbsp;
                                    <a href="https://thp.org/">The Hunger Project</a>,&nbsp;
                                    <a href="https://childrenshungeralliance.org/">Children's Hunger Alliance</a>,&nbsp;
                                    <a href="https://www.roomtoread.org/">Room to Read</a>,&nbsp;
                                    your local soup kitchen
                                </li>
                            </ul>
                    </>
                }
            </StyledConsole>
        )
    }
}