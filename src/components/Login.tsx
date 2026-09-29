import { useState, type FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/user/userSlice'

const Login = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (name && email) {
      dispatch(setUser({ name, email }))
    }
  }

  return (
    <main className="auth-layout" id="main-content">
      <aside className="auth-aside" aria-label="Hatch account portal">
        <a className="brand-lockup" href="#main-content" aria-label="Hatch home">
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span>hatch</span>
        </a>
        <div className="auth-aside-copy">
          <p className="eyebrow eyebrow-light">PERSONAL WORKSPACE</p>
          <h1>Your account,<br />at a glance.</h1>
          <p>Keep the details that identify you clear and close at hand.</p>
        </div>
        <p className="auth-aside-footer">A considered space for your account.</p>
      </aside>

      <section className="auth-main" aria-labelledby="login-title">
        <div className="auth-form-wrap">
          <a className="brand-lockup brand-lockup-mobile" href="#main-content" aria-label="Hatch home">
            <span className="brand-mark" aria-hidden="true"><span /></span>
            <span>hatch</span>
          </a>
          <p className="eyebrow">WELCOME BACK</p>
          <h2 id="login-title">Sign in</h2>
          <p className="auth-intro">Enter your details to continue to your workspace.</p>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                placeholder="e.g. Jordan Lee"
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                placeholder="you@company.com"
              />
            </div>
            <button className="primary-button" type="submit">
              Continue to workspace
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
          <p className="auth-footnote">Your profile details stay in this browser session.</p>
        </div>
      </section>
    </main>
  )
}

export default Login