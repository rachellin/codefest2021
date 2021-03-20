import React from 'react';

import { StyledStats } from './Style';

export class Stats extends React.Component {
    render () {
        return (
            <StyledStats>
                <h1>stats</h1>
                <div class="stat">
                    <b>career: </b>
                </div>
                <div class="stat">
                    <b>daily income: </b>
                </div>
                <div class="stat">
                    <b>money: </b>
                </div>
                <div class="stat">
                    <b>nutrition: </b>
                </div>
            </StyledStats>
        )
    }
}