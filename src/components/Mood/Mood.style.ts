import styled from "styled-components";

export const MoodContainer = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 1rem;

    button{
        width: 100%;
        height: 40px;
        border-radius: 5px;
        background-color: #f5f5f5;
        border: 1px solid;
        border-color: ${(props) => props.theme.secondary};
        cursor: pointer;
        font-size: 20px;

        &:hover{
            border-color: ${(props) => props.theme.primary};
        }

        &:active{
            background-color: ${(props) => props.theme.primary};
        }
    }
`;