import { auth } from '../data/content'
import { Field, SubmitButton } from '../components/auth/AuthControls'
import AuthLayout, { AuthLink } from '../components/layout/AuthLayout'

export default function RegisterPage() {
  return (
    <AuthLayout
      title={auth.register.heading}
      subtitle={auth.register.eyebrow}
      marketing={auth.register.marketing}
      footer={<AuthLink prompt={auth.register.prompt} linkLabel={auth.register.link} to="/login" />}
    >
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <Field label="Full Name" name="name" autoComplete="name" placeholder={auth.register.namePlaceholder} />
        <Field label="Email" name="email" type="email" autoComplete="email" placeholder={auth.register.emailPlaceholder} />
        <Field
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          placeholder={auth.register.passwordPlaceholder}
        />

        <div className="pt-2">
          <SubmitButton>{auth.register.button}</SubmitButton>
        </div>
      </form>
    </AuthLayout>
  )
}
