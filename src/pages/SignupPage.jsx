import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Checkbox, Divider, Field, SocialButton, SubmitButton } from '../components/auth/AuthControls'
import AuthLayout from '../components/layout/AuthLayout'

export default function SignupPage() {
  const [pending, setPending] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setPending(true)
  }

  return (
    <AuthLayout
      title="Create your workspace"
      subtitle="Free forever for up to 5 members. No credit card required."
      footer={
        <>
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-brand-300 transition-colors hover:text-brand-200">
            Sign in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="First name" name="firstName" autoComplete="given-name" />
          <Field label="Last name" name="lastName" autoComplete="family-name" />
        </div>

        <Field
          label="Work email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
        />
        <Field
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          placeholder="At least 8 characters"
        />

        <Checkbox name="terms">
          <span>
            I agree to the{' '}
            <Link to="/signup" className="text-brand-300 hover:text-brand-200">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/signup" className="text-brand-300 hover:text-brand-200">
              Privacy Policy
            </Link>
            .
          </span>
        </Checkbox>

        <SubmitButton pending={pending} pendingLabel="Creating account…">
          Create free account
        </SubmitButton>

        <Divider>or sign up with</Divider>

        <SocialButton>Continue with Google</SocialButton>
      </form>
    </AuthLayout>
  )
}
