import { Calendar } from "react-calendar";
import Profile from "../Profile/Profile";
import { BoardContainer } from "./Board.style";

export default function Board() {

    const teste = (date: Date) => {
        console.log(date)
    }

  return (
    <BoardContainer>
        <Profile />
        <div>
            <Calendar onChange={teste} />
            <p>Habits</p>
        </div>

        <div>
            <p>Mood</p>
        </div>
    </BoardContainer>
  )
}
