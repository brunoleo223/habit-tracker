import { createGlobalStyle } from 'styled-components';
import { ThemeProps } from './Theme';

export default createGlobalStyle<ThemeProps>`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, html{
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.primary};
        font: 16px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    h1{
        margin-bottom: 20px;
    }
`;