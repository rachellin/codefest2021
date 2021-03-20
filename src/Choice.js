import React from 'react';

import { StyledChoice } from './Style';

export class Choice extends React.Component {

    render () {
        return (
            <StyledChoice onClick={this.props.onClick}>
                <h1>{this.props.title}</h1>
                {this.props.desc}
            </StyledChoice>
        )
    }
}