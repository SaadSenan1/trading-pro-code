import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import AuthHeroLayout from "../components/AuthHeroLayout"

// Component لللودنج
function Loading() {
  return (
    <div className="loading-overlay">
      <div className="spinner"></div>
    </div>
  )
}

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter email and password")
      return
    }

    setLoading(true) // تشغيل اللودنج
    setTimeout(() => {
      localStorage.setItem("user", JSON.stringify({ email }))
      navigate("/dashboard")
    }, 1000) // 1 ثانية لمحاكاة التحميل
  }

  return (
    <AuthHeroLayout>
      {loading && <Loading />}
      <div className="auth-card">
        <h2>Register</h2>

        <input
          placeholder="Email"
          value={email}
          onChange={e => { setEmail(e.target.value); setError("") }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => { setPassword(e.target.value); setError("") }}
        />

        {error && <p className="auth-error">{error}</p>}

        <button onClick={handleLogin}>Register</button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </AuthHeroLayout>
  )
}