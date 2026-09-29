import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'

const UserProfile = () => {
  const user = useSelector((state: RootState) => state.user)
  const initials = user.name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

  return (
    <div className="sidebar-user">
      <span className="avatar avatar-small" aria-hidden="true">{initials}</span>
      <span className="sidebar-user-copy">
        <span className="sidebar-user-name">{user.name}</span>
        <span className="sidebar-user-email">{user.email}</span>
      </span>
    </div>
  )
}

export default UserProfile