import { DayLogContainer, Square } from "./DayLog.style";

export interface SquareProps {
    id?: number;
    level: number;
    date?: Date;
}

export default function DayLog() {
    const squares = [] as any;

    for (var i = 1; i < 365; i++) {
        const item = {
            id: i,
            level: Math.floor(Math.random() * 5),
            date: new Date(2023, 0, i),
        }
        squares.push(item);
    }


  return (
    <DayLogContainer>
        <h1>My progress this year</h1>
        <div className="squares">
            {squares.map((square: SquareProps) => (
                <Square className="square" key={square.id} level={square.level}>
                    {square.level}
                </Square>
            ))}
        </div>
    </DayLogContainer>

  )
}
