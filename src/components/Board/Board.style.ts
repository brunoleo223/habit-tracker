import styled from "styled-components";

export const BoardContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin: 2rem auto;

    border: 5px solid ${({ theme }) => theme.primary};
    width: 100%;
    max-width: 1200px;
    border-radius: 20px;
    padding: 15px;

    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .today{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }

    .habitsToday{
        height: auto;
        max-height: 200px;
        overflow-y: scroll;
    }
`;