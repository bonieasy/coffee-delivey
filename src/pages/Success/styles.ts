import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 6rem;
    padding: 0 10rem;
    margin-top: 5rem;

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
        font-stretch: 100;
        margin-bottom: 2rem;
    }

   

    .order-info {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        border-width: 2px;
        border-style: solid;
        border-image: linear-gradient(to right, #DBAC2C, #8047F8) 1;
        border-radius: 6px 36px;
        padding: 2.5rem;
    }

    .local {
        display: flex;
        flex-direction: row;
        align-items: center;
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

    .clock {
        display: flex;
        flex-direction: row;
        gap: 0.75rem;
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

    .money {
        display: flex;
        flex-direction: row;
        gap: 0.75rem;
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

 export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    `;