import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Checkbox, Divider, Field, SocialButton, SubmitButton } from '../components/auth/AuthControls'
import AuthLayout from '../components/layout/AuthLayout'

export default function LoginPage() {
  const [pending, setPending] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setPending(true)
  }

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to pick up where your team left off."
      footer={
        <>
          Don&apos;t have an account?{' '}
          <Link to="/signup" className="font-medium text-brand-300 transition-colors hover:text-brand-200">
            Sign up
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <Field label="Email" name="email" type="email" autoComplete="email" placeholder="you@company.com" />

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-medium text-ink-200">
              Password
            </label>
            <Link to="/login" className="text-xs text-brand-300 transition-colors hover:text-brand-200">
              Forgot password?
            </Link>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            className="h-11 w-full rounded-xl border border-ink-600 bg-ink-900/60 px-4 text-sm text-ink-100 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
          />
        </div>

        <Checkbox name="remember" className="items-center">
          Keep me signed in
        </Checkbox>

        <SubmitButton pending={pending} pendingLabel="Signing in…">
          Sign in
        </SubmitButton>

        <Divider>or continue with</Divider>

        <SocialButton>Continue with Google</SocialButton>
      </form>
    </AuthLayout>
  )
}
