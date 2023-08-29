import styled from 'styled-components'
import {FancyButton} from '../Button/Button.styles.js'

export const StyledBodyInput = styled.input`
    width:280px;
    margin-right: 0.5rem;
    background-color: #bee8f3;
    color: rgb(92, 89, 89);
    border: none;
`
export const StyledBodyDiv = styled.div`
    position: absolute;
    top:25%;
    left: 38%;
    padding: 1rem;
    text-align:center;
    margin: 1rem auto;

    ${FancyButton},
    ${StyledBodyInput}{
        padding: 0.25rem;
        border-radius: 5px;
        font-family: inherit;
        font-size: inherit;
        outline: none;
    }
`
export const StyledErrorDiv = styled.div`
    position:absolute;
    top:70%;
    left: 40%;
    padding: 1rem;
    text-align:center;
    margin: 1rem auto;
`

