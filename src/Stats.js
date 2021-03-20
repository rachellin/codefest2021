import React from 'react';

import { StyledStats } from './Style';

export class Stats extends React.Component {
    render () {
        return (
            <StyledStats>
                <h1>stats</h1>
                <div class="stat">
                    <b>career:</b> {this.props.career}
                </div>
                <div class="stat">
                    <b>daily income:</b> {this.props.income}
                </div>
                <div class="stat">
                    <b>money:</b> ${this.props.money}
                </div>
                <div class="stat">
                    <b>health:</b> {this.props.health}
                </div>

                <button onClick={() => this.props.onClick(0)}>
                    RESTART
                </button>
                <button onClick={() => this.props.onClick(1)}>
                    HOW TO PLAY
                </button>
            </StyledStats>
        )
    }
}