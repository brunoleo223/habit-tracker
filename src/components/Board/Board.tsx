import BoxContainer from "../BoxContainer/BoxContainer";
import Calendar from "../Calendar/Calendar";
import DayLog from "../DayLog/DayLog";
import Habit from "../Habit/Habit";
import Mood from "../Mood/Mood";
import MoodChart from "../MoodChart/MoodChart";
import Profile from "../Profile/Profile";
import { BoardContainer } from "./Board.style";

export default function Board() {

  return (
    <BoardContainer>
        {/* Profile */}
        <BoxContainer>
            <Profile />
        </BoxContainer>

        {/* Content */}
        <div className="content">
            {/* DayLog */}
            <BoxContainer>
                <DayLog />
            </BoxContainer>

            {/* Mood */}
            <BoxContainer>
                <div className="moodContent">
                    <div>
                        <h1>How are you today?</h1>
                        <Mood />
                    </div>
                    <div>
                        <MoodChart />
                    </div>
                </div>
            </BoxContainer>

            <div className="today">
                {/* Calendar */}
                <BoxContainer>
                    <Calendar />
                </BoxContainer>

                {/* Today Habits */}
                <BoxContainer>
                    <h1>Today</h1>
                    <div className="habitsToday">
                        <Habit />
                        <Habit />
                        <Habit />
                        <Habit />
                        <Habit />
                        <Habit />
                    </div>
                </BoxContainer>
            </div>

            {/* All Habits */}
            <BoxContainer>
                <h1>Habits</h1>
            </BoxContainer>
        </div>

    </BoardContainer>
  )
}
