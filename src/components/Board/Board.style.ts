import styled from "styled-components";

export const BoardContainer = styled.div`
    display: flex;
    gap: 2rem;
    margin: 2rem auto;

    border: 5px solid ${({ theme }) => theme.primary};
    width: 100%;
    max-width: 1200px;
    border-radius: 20px;
    padding: 15px;
`;