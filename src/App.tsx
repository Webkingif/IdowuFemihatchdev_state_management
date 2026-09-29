import { useSelector } from 'react-redux'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import UserPage from './components/UserPage'
import type { RootState } from './redux/store'

const App = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn)

  if (!isLoggedIn) {
    return <Login />
  }

  return (
    <div className="app-shell">
      <Sidebar />
      <div className="workspace">
        <Navbar />
        <main id="main-content" className="page-content">
          <UserPage />
        </main>
      </div>
    </div>
  )
}

export default App