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
export const trades = [
  {
    id: 1,
    pair: "EUR/USD",
    type: "Buy",
    entry: 1.0821,
    exit: 1.0850,
    profit: 290
  },
  {
    id: 2,
    pair: "GBP/USD",
    type: "Sell",
    entry: 1.2650,
    exit: 1.2600,
    profit: 500
  },
  {
    id: 3,
    pair: "BTC/USD",
    type: "Buy",
    entry: 42000,
    exit: 41800,
    profit: -200
  },
  {
    id: 4,
    pair: "XAU/USD",
    type: "Sell",
    entry: 2035,
    exit: 2020,
    profit: 150
  }
]