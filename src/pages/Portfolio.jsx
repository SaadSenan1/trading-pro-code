import StatCard from "../components/StatCard"
import { FaWallet, FaChartPie, FaDollarSign } from "react-icons/fa"

export default function Portfolio() {

  return (

    <div>

      <h1 style={{ marginBottom: 30 }}>Portfolio</h1>

      <div className="stats-grid">

        <StatCard
          title="Total Balance"
          value="$24,500"
          change="+3.2%"
          icon={<FaWallet />}
        />

        <StatCard
          title="Invested"
          value="$18,200"
          change="+1.1%"
          icon={<FaChartPie />}
        />

        <StatCard
          title="Available"
          value="$6,300"
          change="+0.5%"
          icon={<FaDollarSign />}
        />

      </div>

    </div>

  )
}