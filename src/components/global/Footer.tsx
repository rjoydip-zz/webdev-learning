import React from 'react'

const Footer = () => {
  return (
    <footer className="footer text--center">
      <div className="container container--fluid">
        <div className="footer__links">
          <a className="footer__link-item" href="/guide">Guide</a>
          <span className="footer__link-separator">&middot;</span>
          <a className="footer__link-item" href="/blog">Blog</a>
          <span className="footer__link-separator">&middot;</span>
          <a className="footer__link-item" href="/playground">Playground</a>
        </div>
        <span>{`Copyright © ${new Date().getFullYear()} rjoydip`}</span>
      </div>
    </footer>
  )
}

export { Footer }
