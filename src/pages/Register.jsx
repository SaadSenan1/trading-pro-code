import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import AuthHeroLayout from "../components/AuthHeroLayout"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter email and password")
      return
    }
    localStorage.setItem("user", JSON.stringify({ email }))
    navigate("/dashboard")
  }

  return (
    <AuthHeroLayout>
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