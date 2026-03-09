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
        <div className="social-links" aria-label="Social links">
          <a
            className="social-link"
            href="https://github.com/fingerpretzul"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.23.72-.51 0-.25-.01-1.09-.02-1.98-2.95.64-3.57-1.25-3.57-1.25-.48-1.21-1.17-1.53-1.17-1.53-.96-.65.07-.64.07-.64 1.06.08 1.62 1.08 1.62 1.08.94 1.61 2.47 1.14 3.07.87.1-.68.37-1.14.66-1.4-2.35-.27-4.82-1.17-4.82-5.2 0-1.15.41-2.08 1.08-2.82-.11-.27-.47-1.36.1-2.84 0 0 .88-.28 2.88 1.08a9.97 9.97 0 0 1 5.24 0c2-1.36 2.88-1.08 2.88-1.08.57 1.48.21 2.57.1 2.84.67.74 1.08 1.67 1.08 2.82 0 4.04-2.48 4.93-4.84 5.19.38.33.72.99.72 2 0 1.44-.01 2.6-.01 2.95 0 .29.19.62.73.51A10.5 10.5 0 0 0 12 1.5Z" />
            </svg>
          </a>
          <a
            className="social-link"
            href="https://www.linkedin.com/in/emerseningebretsen"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56a1.96 1.96 0 1 0-3.92 0 1.96 1.96 0 0 0 3.92 0ZM20.5 13.02c0-3.46-1.85-5.07-4.33-5.07-2 0-2.9 1.1-3.4 1.87V8.5H9.4c.04.88 0 11.5 0 11.5h3.37v-6.42c0-.34.03-.67.13-.91.27-.67.9-1.37 1.95-1.37 1.38 0 1.93 1.03 1.93 2.54V20h3.37v-6.98Z" />
            </svg>
          </a>
        </div>
      </main>
    </>
  )
}

export default App
