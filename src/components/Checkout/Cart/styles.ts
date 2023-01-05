import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 10rem 0 1rem;
    margin-bottom: 5rem;
`;

export const SelectedItems = styled.div`
    background: var(--card);
    padding: 2rem 2.5rem;
    border-radius: 6px 44px;
    max-width: 28rem;
`;

export const Products = styled.div`
    padding: 1rem 0 2rem;
    border-bottom: 1px solid var(--button);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.25rem;

    img {
        width: 4rem;
        height: 4rem;
    }

    .details {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        span {
            color: var(--subtitle);
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 130%;
        }
    }

    .buttons {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
    }
    .trash-button {
        background: var(--button);
        border-radius: 6px;
        text-transform: uppercase;
        color: var(--text);
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 160%;
        padding: 0 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        height: 2rem;
    }

    input {
        border-radius: 6px;
        width: 72px;
        height: 2rem;
        background: transparent;
    }
    input[type="number"] {
    -webkit-appearance: textfield !important;
    -moz-appearance: textfield !important;
    appearance: textfield !important;
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  .plusminus {
  color: var(--purple);
  height: 100%;
  width: 30%;
  background: transparent;
}

.num {
  height: 100%;
  width: 39%;
  border: none;
}

.wrapper {
    background: var(--button);
    width: 72px;
    height: 2rem;
    padding: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;
    border-radius: 6px;
}
`;

export const Values = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    margin-top: 1.5rem;

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 0.5rem;

        font-family: 'Roboto' sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 130%;
        color: var(--text);
    }

.total {
    font-family: 'Roboto' sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    color: var(--subtitle);
}

button {
    padding: 0.75rem 0.5rem;
    width: 23rem;
    height: 2.875rem;
    background: var(--yellow);
    color: var(--white);
    border-radius: 6px;

    font-family: 'Roboto' sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 160%;
    text-transform: uppercase;
    font-stretch: 100;
}
`;