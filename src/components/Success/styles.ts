import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 10rem;
    margin-bottom: 5rem;

    h1 {
        font-family: 'Baloo 2' sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 2rem;
        line-height: 130%;
        color: var(--yellow-dark);
    }

    span {
        font-family: 'Roboto' sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 130%;
        color: var(--subtitle);
        font-stretch: 100
    }

    .order-info {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        border: 1px solid transparent;
        border-image: linear-gradient(to right, #DBAC2C, #8047F8);
        border-radius: 6px 36px;
    }

    .local {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 0.75rem;
    }

    .map {
        background: var(--purple);
        border-radius: 1000px;
        width: 2rem;
        height: 2rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .timer {
        background: var(--yellow);
        border-radius: 1000px;
        width: 2rem;
        height: 2rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .euro {
        background: var(--yellow-dark);
        border-radius: 1000px;
        width: 2rem;
        height: 2rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`;