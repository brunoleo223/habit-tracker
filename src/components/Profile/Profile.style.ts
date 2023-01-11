import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 20px;
    border: .5px solid ${({ theme }) => theme.secondary};
    border-radius: 10px;
    text-align: center;

    img{
        width: 150px;
    }
    
    h3{
        font-size: 1.5rem;
    }
`;