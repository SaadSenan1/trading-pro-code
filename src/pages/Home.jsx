import { Link } from "react-router-dom"
import AuthHeroLayout from "../components/AuthHeroLayout"

export default function Home() {
  return (
    <AuthHeroLayout>
      <div className="hero-content">
        <h1>Trade Smarter, Grow Faster</h1>
        <p>Professional trading platform with advanced analytics, portfolio tracking and real-time execution.</p>
        <Link to="/login" className="cta">Start Trading Now</Link>
      </div>
    </AuthHeroLayout>
  )
}