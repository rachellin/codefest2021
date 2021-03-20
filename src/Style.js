import styled from 'styled-components';

// export const StyledContainer = styled.div`

// `

export const StyledContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 70vw;
    height: 70vh;
    display: flex;

    h1 {
        text-align: center;
    }
`

export const StyledConsole = styled.div`
    width: 70%;
    border: 1px solid #eee;
    border-radius: 2rem;
    background: #fff;
    padding: 2rem;
`

export const StyledAnswers= styled.div`
    display: flex;
    //flex-wrap: wrap;
`

export const StyledChoice = styled.div`
    border-radius: 1rem;
    background: lightblue;
    width: 50%;
    margin: 2rem;
    padding: 1rem;

    h1 {
        font-size: 1.25rem;
        font-style: italic;
    }

    :hover {
        cursor: pointer;
    }
`

export const StyledStats = styled.div`
    width: 30%;
    border: 1px solid #eee;
    padding: 2rem;
`
