import styled from "styled-components";

export const HabitContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #f5f5f5;
    border: 1px solid;
    border-color: ${(props) => props.theme.secondary};
    padding: 10px;
    border-radius: 5px;
    align-items: center;
    margin-bottom: 10px;

    .buttons{
        display: flex;
        gap: 10px;

        p{
            margin: 0;
        }

        button{
            background-color: ${(props) => props.theme.secondary};
            border: 1px solid transparent;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            cursor: pointer;

            &:hover{
                border-color: ${(props) => props.theme.primary};
            }
        }
    }
`;