import UserProfile from './UserProfile'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../redux/user/userSlice'

const Sidebar = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <aside className="app-sidebar" aria-label="Main navigation">
      <a className="brand-lockup sidebar-brand" href="#overview" aria-label="Hatch overview">
        <span className="brand-mark" aria-hidden="true"><span /></span>
        <span>hatch</span>
      </a>
      <nav className="sidebar-nav" aria-label="Workspace">
        <a className="sidebar-nav-link" href="#overview" aria-current="page">
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
            <path d="m3 8 7-5 7 5v8.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M7.5 17v-5.5h5V17" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
          <span>Overview</span>
        </a>
      </nav>
      <div className="sidebar-footer">
        <UserProfile />
        <button className="logout-button" type="button" onClick={handleLogout}>
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
            <path d="M8 4H4.5a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5H8m4-3 3-3-3-3m3 3H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Sign out</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar