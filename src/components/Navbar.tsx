const Navbar = () => {
  return (
    <header className="topbar">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <span>Workspace</span>
        <span className="breadcrumb-divider" aria-hidden="true">/</span>
        <span className="breadcrumb-current" aria-current="page">Overview</span>
      </nav>
      <div className="topbar-status">
        <span className="status-dot" aria-hidden="true" />
        <span>Account active</span>
      </div>
    </header>
  )
}

export default Navbar