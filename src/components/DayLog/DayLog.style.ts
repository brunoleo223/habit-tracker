import styled from "styled-components";
import { SquareProps } from "./DayLog";

export const DayLogContainer = styled.div`
    .squares{
        display: flex;
        flex-wrap: wrap;
        gap: 4.2px;
        width: 100%;
    }
`;

export const Square = styled.div<SquareProps>`
    width: 13px;
    height: 13px;
    border-radius: 2.5px;
    position: relative;
    background-color: ${({ level }) => {
        switch (level) {
            case 0:
                // return rgba with primary theme color from ThemeProvider and 0.5 opacity
                return ({ theme }) => theme.secondary;
            case 1:
                return "rgba(28, 41, 57, 0.4)";
            case 2:
                return "rgba(28, 41, 57, 0.6)";
            case 3:
                return "rgba(28, 41, 57, 0.8)";
            case 4:
                return "rgba(28, 41, 57, 1)";
        }
    }};
    
    p{
        position: absolute;
        top: -50px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 0.8rem;
        background-color: #fff;
        color: ${({ theme }) => theme.primary};
        visibility: hidden;
        padding: 10px 20px;
        border-radius: 4px;
        transition: all 0.2s ease-in-out;
        width: max-content;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        border: 1px solid ${({ theme }) => theme.secondary};
        span{
            color: ${({ theme }) => theme.secondary};
        }

        &::after{
            content: "";
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            border: 5px solid transparent;
            border-top-color: ${({ theme }) => theme.secondary};

        }
    }

    &:hover{
        p{
            visibility: visible;
            z-index: 9;
        }
    }
`;

export const Popover = styled.div``;