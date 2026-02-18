import { trades } from "../data/trades"

export default function Table() {
  return (
    <div className="table-card">

      <h3 className="table-title">Recent Trades</h3>

      <div className="table-wrapper">

        <table>

          <thead>
            <tr>
              <th>Pair</th>
              <th>Type</th>
              <th>Entry</th>
              <th>Exit</th>
              <th>Profit</th>
            </tr>
          </thead>

          <tbody>

            {trades.map(trade => (

              <tr key={trade.id}>

                <td>{trade.pair}</td>

                <td className={trade.type === "Buy" ? "buy" : "sell"}>
                  {trade.type}
                </td>

                <td>{trade.entry}</td>
                <td>{trade.exit}</td>

                <td
                  className={
                    trade.profit >= 0 ? "profit-positive" : "profit-negative"
                  }
                >
                  {trade.profit >= 0 ? "+" : ""}
                  ${trade.profit}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  )
}