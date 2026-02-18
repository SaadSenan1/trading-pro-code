import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import MainLayout from "./layout/MainLayout"

import Dashboard from "./pages/Dashboard"
import Portfolio from "./pages/Portfolio"
import Trades from "./pages/Trades"
import Settings from "./pages/Settings"

import Login from "./pages/Login"
import Register from "./pages/Register"
import ProtectedRoute from "./components/ProtectedRoute"
import Home from "./pages/Home"
export default function App() {
  return (
    <BrowserRouter>

      <Routes>
<Route path="/" element={<Home />} />
        {/* Public */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Layout */}
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/trades" element={<Trades />} />
            <Route path="/settings" element={<Settings />} />

          </Route>
        </Route>

        {/* Default */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>

    </BrowserRouter>
  )
}