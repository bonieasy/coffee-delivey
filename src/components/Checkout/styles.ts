import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 10rem;

    margin-bottom: 5rem;
`;

export const FormAddresse = styled.div`
    background: var(--card);
    border-radius: 6px;
    padding: 2.5rem;


    input {
        background: var(--input);
        border: 1px solid var(--button);
        border-radius: 4px;
        height: 42px;
    }
`;

export const Payment = styled.div`
    background: var(--card);
    padding: 2.5rem;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
   //gap: 1rem;

   span {
        font-family: 'Roboto' sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
        color: var(--subtitle);
    }

    p {
        font-family: 'Roboto' sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
    }

    .eur-icon {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    }
`;
export const PaymentMethod = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    text-transform: uppercase;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;

        background: var(--button);
        border-radius: 6px;
        height: 3.188rem;
        width: 11.167rem;
        font-family: 'Roboto' sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 160%;
        color: var(--text);
    }

`;