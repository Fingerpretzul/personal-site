import './App.css'

function App() {
  return (
    <>
      <header className="site-header">
        <div className="site-brand">
          <span className="site-name">Emersen Ingebretsen</span>
          <span className="site-tag">Personal Site</span>
        </div>
        <nav className="site-nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#education">Education</a>
        </nav>
      </header>

      <main className="hero">
        <h1 className="title" id="about">
          Emersen Ingebretsen
        </h1>
        <h2 className="subtitle" id="education">
          Computer Science BS - April 2027
        </h2>
      </main>
    </>
  )
}

export default App
