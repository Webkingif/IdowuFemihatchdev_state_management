import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'

const UserPage = () => {
  const user = useSelector((state: RootState) => state.user)
  const firstName = user.name.trim().split(/\s+/)[0]
  const initials = user.name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

  return (
    <div className="overview-page" id="overview">
      <div className="page-heading">
        <div>
          <p className="eyebrow">YOUR WORKSPACE</p>
          <h1>Welcome, {firstName}.</h1>
          <p className="page-subtitle">Here’s your account at a glance.</p>
        </div>
      </div>

      <div className="overview-grid">
        <section className="panel profile-panel" aria-labelledby="profile-heading">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">PROFILE</p>
              <h2 id="profile-heading">Personal details</h2>
            </div>
            <span className="panel-index" aria-hidden="true">01</span>
          </div>

          <div className="profile-identity">
            <span className="avatar avatar-large" aria-hidden="true">{initials}</span>
            <div className="profile-identity-copy">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
          </div>

          <dl className="detail-list">
            <div className="detail-row">
              <dt>Full name</dt>
              <dd>{user.name}</dd>
            </div>
            <div className="detail-row">
              <dt>Email address</dt>
              <dd>{user.email}</dd>
            </div>
          </dl>
        </section>

        <section className="session-panel" aria-labelledby="session-heading">
          <div className="session-panel-top">
            <span className="session-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M7.5 10V7a4.5 4.5 0 0 1 9 0v3m-11 0h13a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 14v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
          </div>
          <p className="eyebrow eyebrow-light">CURRENT SESSION</p>
          <h2 id="session-heading">You’re all set.</h2>
          <p className="session-description">Your profile is active in this browser session. Sign out when you’re finished.</p>
          <div className="session-divider" />
          <p className="session-footnote">Session status <strong>Active</strong></p>
        </section>
      </div>

      <p className="overview-note">Your profile details are held for this browser session only.</p>
    </div>
  )
}

export default UserPage