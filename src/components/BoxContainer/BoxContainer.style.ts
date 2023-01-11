import styled from "styled-components";

export const Box = styled.div`
    background-color: #fff;
    padding: 20px;
    border: .5px solid ${({ theme }) => theme.secondary};
    border-radius: 10px;
`;