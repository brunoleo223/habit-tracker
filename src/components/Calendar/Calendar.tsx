import { Calendar as CalendarField } from "react-calendar";
import { CalendarContent } from "./Calendar.style";

export default function Calendar() {

    const teste = (date: Date) => {
        console.log(date)
    }


    return (
        <CalendarContent>
            <CalendarField onChange={teste} className='calendar' />
        </CalendarContent>
    )
}
