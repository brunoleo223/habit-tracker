import { Calendar } from "react-calendar";
import BoxContainer from "../BoxContainer/BoxContainer";
import Profile from "../Profile/Profile";
import { BoardContainer } from "./Board.style";

export default function Board() {

    const teste = (date: Date) => {
        console.log(date)
    }

  return (
    <BoardContainer>
        <BoxContainer>
            <Profile />
        </BoxContainer>

        <div>
            <BoxContainer>
                <Calendar onChange={teste} />
                <p>Habits</p>
            </BoxContainer>

            <BoxContainer>
                <p>Mood</p>
            </BoxContainer>
        </div>

    </BoardContainer>
  )
}
