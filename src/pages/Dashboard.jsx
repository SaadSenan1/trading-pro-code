import StatCard from "../components/StatCard"
import ChartCard from "../components/ChartCard"
import { FaDollarSign, FaChartLine, FaWallet, FaExchangeAlt } from "react-icons/fa"
import Table from "../components/Table"
export default function Dashboard() {

  const profitData = [
    { name: "Mon", profit: 400 },
    { name: "Tue", profit: 300 },
    { name: "Wed", profit: 600 },
    { name: "Thu", profit: 800 },
    { name: "Fri", profit: 500 }
  ]

  const marketData = [
    { name: "09:00", price: 100 },
    { name: "10:00", price: 120 },
    { name: "11:00", price: 115 },
    { name: "12:00", price: 140 },
    { name: "13:00", price: 160 }
  ]

  return (

    <div>

      <h1 style={{ marginBottom: 30 }}>Dashboard</h1>

      {/* ===== Stats ===== */}

      <div className="stats-grid">

        <StatCard
          title="Balance"
          value="$12,450"
          change="+2.5%"
          icon={<FaDollarSign />}
        />

        <StatCard
          title="Profit"
          value="$3,240"
          change="+1.2%"
          icon={<FaChartLine />}
        />

        <StatCard
          title="Equity"
          value="$10,890"
          change="+0.8%"
          icon={<FaWallet />}
        />

        <StatCard
          title="Trades"
          value="152"
          change="+5%"
          icon={<FaExchangeAlt />}
        />

      </div>

      {/* ===== Charts ===== */}

      <div className="charts-grid">

        <ChartCard
          title="Market Chart"
          data={marketData}
          type="area"
          dataKey="price"
        />

        <ChartCard
          title="Profit Overview"
          data={profitData}
          type="line"
          dataKey="profit"
        />

      </div>

    </div>
  )
}
<Table />
