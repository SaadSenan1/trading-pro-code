import { useEffect, useState } from "react"

export default function StatCard({ title, value, change, icon }) {

  const [price, setPrice] = useState(value)

  useEffect(() => {

    const interval = setInterval(() => {

      const random = Math.floor(Math.random() * 20 - 10)

      setPrice(prev => {

        const num = parseInt(prev.replace(/[^0-9]/g, ""))

        return "$" + (num + random)

      })

    }, 2000)

    return () => clearInterval(interval)

  }, [])

  return (
    <div className="stat-card">

      <div className="stat-top">
        <div className="stat-icon">{icon}</div>
        <div className="stat-change">{change}</div>
      </div>

      <h3>{price}</h3>
      <p>{title}</p>

    </div>
  )
}