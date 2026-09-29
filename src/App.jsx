import { Route, Routes, useLocation } from 'react-router-dom'

import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import ScrollToTop from './components/layout/ScrollToTop'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import RegisterPage from './pages/RegisterPage'

const authRoutes = ['/login', '/register']

export default function App() {
  const { pathname } = useLocation()
  const isAuthRoute = authRoutes.includes(pathname)
  // the landing page hero is blue, so the transparent header needs light text
  const navTone = pathname === '/' ? 'light' : 'dark'

  return (
    <>
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      {!isAuthRoute ? <Navbar tone={navTone} /> : null}

      <main id="main">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {!isAuthRoute ? <Footer /> : null}
    </>
  )
}
