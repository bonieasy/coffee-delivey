import styled from "styled-components";

export const Container = styled.div`
    padding: 0 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3.375rem;
    margin-bottom: 5rem;

    h2 {
        color: var(--subtitle);
    }
`;

export const Cards = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
`;

export const CoffeeCard = styled.div`
    background: var(--card);
    border-radius: 6px 36px;
    padding: 1.5rem;
    display: flex;
    gap: 0.25rem;
    flex-direction: column;
    align-items:  center;
    max-width: 17rem;
    

    img {
        position: relative;
        top: -40px;
        height: 120px;
        width: 120px;
    }

    h3 {
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 130%;
        color: var(--subtitle);
    }

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 130%;
        text-align: center;
        color: var(--label);
    }
`;
export const AllTags = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
`;

export const Tag = styled.span`
    color: var(--yellow-dark);
    background: var(--yellow-light);
    border-radius: 100px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.7rem;
    line-height: 130%;
    padding: 4px 8px;

`;

export const Buy = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    padding: 1.25rem 0;

  .plusminus {
  color: var(--purple);
  height: 100%;
  width: 30%;
  background: transparent;
}
&:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

.num {
  width: 39%;
  border: none;
}

.wrapper {
    background: var(--button);
    width: 72px;
    height: 38px;
    padding: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;
    border-radius: 6px;
}

    button {
        background: var(--purple-dark);
        border-radius: 6px;
        padding: 2px;
        
    }

    p {
        color: var(--text);
        font-family: 'Roboto';
        font-style: normal;
        font-size: 14px;
        line-height: 130%;
        font-weight: 800;

    }
`;
