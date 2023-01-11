import { Calendar } from "react-calendar";
import BoxContainer from "../BoxContainer/BoxContainer";
import DayLog from "../DayLog/DayLog";
import Profile from "../Profile/Profile";
import { BoardContainer } from "./Board.style";

export default function Board() {

    const teste = (date: Date) => {
        console.log(date)
    }

  return (
    <BoardContainer>
        {/* Profile */}
        <BoxContainer>
            <Profile />
        </BoxContainer>

        {/* Content */}
        <div className="content">
            <BoxContainer>
                <DayLog />
            </BoxContainer>

            <BoxContainer>
                <p>Mood</p>
            </BoxContainer>

            <BoxContainer>
                <Calendar onChange={teste} />
            </BoxContainer>

            <BoxContainer>
                <p>Habits</p>
            </BoxContainer>
        </div>

    </BoardContainer>
  )
}
