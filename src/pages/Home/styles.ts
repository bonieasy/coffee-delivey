import styled from "styled-components";
import background from '../../assets/Background.svg';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 4rem;
    padding: 5rem 10rem;
    background-image: url(${background}) no-repeat center;
    //filter: blur(0.5px);



`;

export const Descriptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h1 {
        font-size: 48px;
        line-height: 130%;
    }

    .subtitle{
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        line-height: 130%;
        margin-bottom: 3rem;
        color: var(--subtitle)
    }
    
`;

export const Items = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;

    div {
        display: flex;
        gap: 0.75rem;
        align-items: baseline;

    }
    div > a {
        border-radius: 1000px;
        width: 2rem;
        height: 2rem;
        padding: 0.5rem;
    }

    .cart {
        background: var(--yellow-dark);
    }

    .package {
        background: var(--text);
    }

    .timer {
        background: var(--yellow);
    }

    .coffee {
        background: var(--purple);
    }
    span {
        font-family: 'Roboto' sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
        color: var(--text);
        }

    `;