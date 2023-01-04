import styled from "styled-components";

export const Container = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 2rem 10rem;

`;
export const Actions = styled.div`
    display: flex;
    gap: 1rem;

button {
    border-radius: 6px;
    padding: 0.5rem;

}

.location {
    background: var(--purple-light);
    color: var(--purple-dark);

    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.cart {
    background: var(--yellow-light);
}

`;
