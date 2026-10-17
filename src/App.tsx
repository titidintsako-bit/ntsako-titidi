import { moreProjects, profile, projects, websites } from './portfolio-data'

function App() {
  return (
    <>
      <a className="skip-link" href="#content">Skip to content</a>
      <div className="site-shell" id="top">
        <div className="page-grid">
          <nav className="section-nav" aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#websites">Websites</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <aside className="profile-rail" aria-label="Profile">
            <img className="identity-photo" src="/profile/ntsako.jpg" alt="" width="78" height="78" decoding="async" />
            <p className="profile-name">Ntsako Titidi</p>
            <p className="profile-role">Agentic Developer</p>
            <p className="profile-location">Pretoria, South Africa</p>
            <div className="rail-links">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              <a href={`mailto:${profile.email}`}>Email <span aria-hidden="true">↗</span></a>
            </div>
          </aside>

          <main id="content" tabIndex={-1}>
            <section className="intro" aria-labelledby="intro-title">
              <h1 id="intro-title">I use agents to build software.</h1>
              <p className="intro-lead">I build coding-agent tooling, machine-learning projects, and web interfaces. Agents are part of how I work; I own the decisions, code, and outcome.</p>
              <div className="intro-actions">
                <a className="button-primary" href="#work">See selected work</a>
                <a className="button-secondary" href={`mailto:${profile.email}`}>Get in touch</a>
              </div>
            </section>

            <section className="content-section work-section" id="work" aria-labelledby="work-title">
              <div className="section-heading">
                <h2 id="work-title">Selected work</h2>
              </div>
              <div className="work-list">
                {projects.map((project) => (
                  <article className="work-item" key={project.title}>
                    <div className="work-meta">
                      <span>{project.field}</span>
                      <span>{project.status}</span>
                    </div>
                    <div className="work-body">
                      <div>
                        <h3>{project.title}</h3>
                        <p>{project.summary}</p>
                        {project.note && <p className="work-note">{project.note}</p>}
                      </div>
                      <a className="work-link" href={project.href} target="_blank" rel="noopener noreferrer">
                        {project.linkLabel} <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                    <p className="work-stack">{project.stack.join(' / ')}</p>
                  </article>
                ))}
              </div>
              <div className="more-projects" aria-label="More software work">
                {moreProjects.map((project) => (
                  <article className="more-project" key={project.title}>
                    <div><h3>{project.title}</h3><p>{project.summary}</p></div>
                    <a href={project.href} target="_blank" rel="noopener noreferrer">{project.linkLabel} <span aria-hidden="true">↗</span></a>
                  </article>
                ))}
              </div>
            </section>

            <section className="content-section websites-section" id="websites" aria-labelledby="websites-title">
              <div className="section-heading">
                <h2 id="websites-title">Websites</h2>
              </div>
              <div className="website-grid">
                {websites.filter((website) => website.image).map((website) => (
                  <article className="website-item" key={website.title}>
                    <a className="website-preview" href={website.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${website.title} website`}>
                      <img src={website.image} alt={`${website.title} website preview`} width="1440" height="900" loading="lazy" decoding="async" />
                    </a>
                    <div className="website-title-row">
                      <h3><a href={website.href} target="_blank" rel="noopener noreferrer">{website.title} <span aria-hidden="true">↗</span></a></h3>
                    </div>
                    <p className="website-kind">{website.kind}</p>
                    <p className="website-summary">{website.summary}</p>
                  </article>
                ))}
              </div>
              {websites.filter((website) => !website.image).map((website) => (
                <article className="website-more" key={website.title}>
                  <div>
                    <h3>{website.title}</h3>
                    <p><span>{website.kind}.</span> {website.summary}</p>
                  </div>
                  <a href={website.href} target="_blank" rel="noopener noreferrer">Visit website <span aria-hidden="true">↗</span></a>
                </article>
              ))}
            </section>

            <section className="content-section about-section" id="about" aria-labelledby="about-title">
              <div className="section-heading"><h2 id="about-title">About</h2></div>
              <div className="about-grid">
                <p>I call myself an agentic developer because agents are part of how I write software, not because every project I make is an AI agent.</p>
                <p>My work spans different areas. Shaka is where I’m exploring coding-agent harnesses; NtsakoGPT and Fall Detection show my interest in machine learning. The website studies show the interface side of my practice. I’d rather show that range than fit it under a narrower title.</p>
              </div>
            </section>

            <section className="contact-section" id="contact" aria-labelledby="contact-title">
              <div>
                <h2 id="contact-title">Let’s talk.</h2>
                <p>For a role, collaboration, or a question about my work.</p>
              </div>
              <a href={`mailto:${profile.email}`}>{profile.email} <span aria-hidden="true">↗</span></a>
            </section>
          </main>
        </div>

        <footer className="site-footer">
          <a href="#top">Back to top ↑</a>
        </footer>
      </div>
    </>
  )
}

export default App
