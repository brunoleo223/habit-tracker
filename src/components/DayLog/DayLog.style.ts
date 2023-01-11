import styled from "styled-components";
import { SquareProps } from "./DayLog";

export const DayLogContainer = styled.div`
    .squares{
        display: flex;
        flex-wrap: wrap;
        gap: 1px;
        width: 100%;
    }
`;

export const Square = styled.div<SquareProps>`
    width: 15px;
    height: 15px;
    border-radius: 1px;
    color: transparent;
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
`;


