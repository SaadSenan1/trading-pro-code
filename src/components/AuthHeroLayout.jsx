import { Link } from "react-router-dom"
import "./auth.css"

export default function AuthHeroLayout({ children }) {
  return (
    <div className="auth-hero">
      
      {/* HEADER */}
      <header className="auth-header">
        <div className="logo">TradePro</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="auth-main">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="auth-footer">
        © 2026 TradePro. All rights reserved.
      </footer>
    </div>
  )
}