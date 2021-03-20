import React from 'react';

import { Console } from './Console';
import { Stats } from './Stats';

import { StyledContainer } from './Style';

export class Container extends React.Component {
    render () {
        return (
            <StyledContainer>
                <Stats/>
                <Console/>
            </StyledContainer>
        )
    }
}