import { Calendar } from "react-calendar";
import { BoardContainer } from "./Board.style";

export default function Board() {
  return (
    <BoardContainer>
        <p>Profile</p>
        <Calendar />
        <p>Mood</p>
    </BoardContainer>
  )
}
