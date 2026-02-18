import { useEffect, useState } from "react"

export default function Settings() {

  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") !== "light"
  })

  useEffect(() => {

    if (dark) {
      document.body.classList.remove("light-mode")
      localStorage.setItem("theme", "dark")
    } else {
      document.body.classList.add("light-mode")
      localStorage.setItem("theme", "light")
    }

  }, [dark])

  return (

    <div>

      <h1 style={{ marginBottom: 80 }}>Settings</h1>

      <div className="settings-card">

        <h3>Appearance</h3>

        <button
          className="theme-btn"
          onClick={() => setDark(!dark)}
        >
          Switch to {dark ? "Light" : "Dark"} Mode
        </button>

      </div>

    </div>

  )
}