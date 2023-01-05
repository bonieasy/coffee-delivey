import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem 0 10rem;
    margin-bottom: 5rem;
`;

export const FormAddresse = styled.div`
    background: var(--card);
    border-radius: 6px;
    padding: 2.5rem;

    max-width: 40rem;

    span, p {
        font-family: 'Roboto' sans-serif;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
    }

    span {
       
        font-size: 16px;
        color: var(--subtitle);
    }

    p {
        font-size: 14px;
        color: var(--text);
    }

    input {
        background: var(--input);
        border: 1px solid var(--button);
        border-radius: 4px;
        height: 42px;
        padding: 0.75rem;
    }

    .inputs-address {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        margin-top: 2rem;
    }
`;

export const Payment = styled.div`
    background: var(--card);
    padding: 2.5rem;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
   //gap: 1rem;

   max-width: 40rem;

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

        margin-bottom: 2rem;
    }

    .eur-icon {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding-bottom: 0.125rem;
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

export const CheckoutContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;