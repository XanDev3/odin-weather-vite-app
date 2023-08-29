import styled from 'styled-components'

export const SearchResult = styled.div`
    position: fixed;
    top: 30%;
    left: 41%;
    width: 300px;
    padding: 2rem;
    margin: 4rem auto;
    border-radius: 5px;
    text-align: center;
    font-family: 'Roboto';
    background-color: var(--blue);
    color: var(--aqua);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    & h3{
        border-radius: 5px;
        color: var(--secondary-light);
        font-size: 40px;
    }
    & p:nth-child(2) {
        font-size: 38px;
    }
    & p {
        font-size: 1.5rem;
    }
`