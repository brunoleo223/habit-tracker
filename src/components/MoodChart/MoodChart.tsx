import { CartesianGrid, Line, LineChart, Tooltip } from "recharts";


const data = [
    {name: 'S', uv: 5},
    {name: 'M', uv: 3},
    {name: 'T', uv: 2},
    {name: 'W', uv: 4},
    {name: 'T', uv: 4},
    {name: 'F', uv: 2},
    {name: 'S', uv: 5},
];

function CustomTooltip({ active, payload }: any) {
    const emojis = ["😭", "😕", "😐", "🙂", "😁"];
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label"> { 
            emojis[payload[0].value - 1]
          } </p>
        </div>
      );
    }
  
    return null;
  }

export default function MoodChart() {
  return (
    <LineChart width={500} height={100} data={data}>
        <CartesianGrid stroke="#e3e5e7" strokeDasharray="5 5"/>
        <Line type="monotone" dataKey="uv" stroke="#1c2939" />
        <Tooltip content={<CustomTooltip />} />
    </LineChart>
  )
}
