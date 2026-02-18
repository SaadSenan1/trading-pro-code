import { NavLink, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { FaChartLine, FaWallet, FaExchangeAlt, FaCog } from "react-icons/fa"

export default function Sidebar() {

  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("user")
    navigate("/login", { replace: true })
  }

  const [open, setOpen] = useState(false)

  // منع السكروول عند فتح السايدبار
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto"
    return () => (document.body.style.overflow = "auto")
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
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
            >
              <span className="icon">{link.icon}</span>
              {open && link.name}
            </NavLink>
          ))}
        </nav>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>

      </aside>
    </>
  )
}