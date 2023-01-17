import styled from "styled-components";

export const CalendarContent = styled.div`
    .calendar{

        .react-calendar__navigation{
            display: flex;

            button.react-calendar__navigation__arrow{
                width: 30px; 
            }

            .react-calendar__navigation__label{
                background-color: ${props => props.theme.primary};
                color: #fff;
            }
        }

        button{
            border: 2px solid #fff;
            border-radius: 10px;
            padding: 3px;
            background-color: ${props => props.theme.secondary};
            transition: all 0.1s ease-in-out;

            &:hover{
                border-color: ${props => props.theme.primary};
                cursor: pointer;
            }
        }

        .react-calendar__month-view__days{
            button{
                background-color: ${props => props.theme.secondary};
                transition: all 0.1s ease-in-out;
                height: 32.6px;

                &.react-calendar__tile--now{
                    background-color: ${props => props.theme.primary};
                    color: #fff;

                    &:hover{
                        border-color: #fff;
                    }
                }

                &.react-calendar__tile--active{
                    background-color: ${props => props.theme.primary};
                    color: #fff;
                }
            }
        }

        .react-calendar__month-view__weekdays{
            text-align: center;
            font-size: 12px;
            margin: 10px 0;
        }

        .react-calendar__month-view__days__day--neighboringMonth{
            opacity: .3;
        }

        .react-calendar__month-view__days__day--weekend{
            color: rgba(255, 0, 0, .6);
        }
        
    }
`;