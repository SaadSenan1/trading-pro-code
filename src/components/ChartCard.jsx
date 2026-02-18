import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts"

export default function ChartCard({ title, data, type = "line", dataKey }) {
  return (
    <div className="chart-card">

      <h3 style={{ marginBottom: 15 }}>{title}</h3>

      <ResponsiveContainer width="100%" height={300}>

        {type === "area" ? (

          <AreaChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Area
              type="monotone"
              dataKey={dataKey}
              stroke="#22c55e"
              fill="#22c55e33"
              strokeWidth={2}
            />
          </AreaChart>

        ) : (

          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey={dataKey}
              stroke="#3b82f6"
              strokeWidth={3}
            />
          </LineChart>

        )}

      </ResponsiveContainer>

    </div>
  )
}