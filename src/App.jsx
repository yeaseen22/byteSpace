import { Route, Routes, useLocation } from 'react-router-dom'

import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import ScrollToTop from './components/layout/ScrollToTop'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import SignupPage from './pages/SignupPage'

const authRoutes = ['/login', '/signup']

function MarketingLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-ink-900">
      <Navbar />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  const { pathname } = useLocation()
  const isAuthRoute = authRoutes.includes(pathname)

  return (
    <>
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-lg focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      {isAuthRoute ? (
        <main id="main" className="bg-ink-900">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </main>
      ) : (
        <MarketingLayout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </MarketingLayout>
      )}
    </>
  )
}
