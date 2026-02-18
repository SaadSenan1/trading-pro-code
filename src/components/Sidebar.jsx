import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import { FaChartLine, FaWallet, FaExchangeAlt, FaCog } from "react-icons/fa"
export default function Sidebar() {
const logout = () => {
  localStorage.removeItem("user")
  window.location.href = "/login"
}
  const [open, setOpen] = useState(true)
useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  }

  return () => {
    document.body.style.overflow = "auto"
  }
}, [open])
  const links = [
    { name: "Dashboard", path: "/dashboard", icon: <FaChartLine /> },
    { name: "Portfolio", path: "/portfolio", icon: <FaWallet /> },
    { name: "Trades", path: "/trades", icon: <FaExchangeAlt /> },
    { name: "Settings", path: "/settings", icon: <FaCog /> }
  ]

  return (
    <>
      {/* Hamburger */}
      <button
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${open ? "open" : "closed"}`}>

        <h2 className="logo"></h2>

        <nav>
          {links.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
            >
              <span className="icon">{link.icon}</span>
              {open && link.name}
            </NavLink>
          ))}
        </nav>
<button onClick={logout}>Logout</button>
      </aside>
    </>
  )
}