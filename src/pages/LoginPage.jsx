import { auth } from '../data/content'
import { Divider, Field, SocialButtons, SubmitButton } from '../components/auth/AuthControls'
import AuthLayout, { AuthLink } from '../components/layout/AuthLayout'

export default function LoginPage() {
  return (
    <AuthLayout
      title={auth.login.heading}
      subtitle={auth.login.eyebrow}
      marketing={auth.login.marketing}
      footer={<AuthLink prompt={auth.login.prompt} linkLabel={auth.login.link} to="/register" />}
    >
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <Field label="Email" name="email" type="email" autoComplete="email" placeholder={auth.login.emailPlaceholder} />
        <Field
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder={auth.login.passwordPlaceholder}
        />

        <div className="pt-2">
          <SubmitButton>{auth.login.button}</SubmitButton>
        </div>

        <div className="space-y-6 pt-4">
          <Divider>{auth.login.divider}</Divider>
          <SocialButtons />
        </div>
      </form>
    </AuthLayout>
  )
}
