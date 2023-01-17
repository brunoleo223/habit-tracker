import { HabitContainer } from "./Habit.style";

export default function Habit() {
  return (
    <HabitContainer>
      <p>Literatura</p>
      <div className="buttons">
        <button>✅</button>
        <button>❌</button>
      </div>
    </HabitContainer>
  )
}
