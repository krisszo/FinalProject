import Fade from 'react-reveal/Fade'
import Button from '../../parts/Button'

export default function Header() {
    return (
        <Fade top delay={500}>
            <header className="site-header reveal-from-bottom">
        <div className="container">
          <div className="site-header-inner">
            <div className="brand">
              <h1 className="m-0">
                <a href="index.html">
                  <img
                    src="images/logo.svg"
                    alt="Cube"
                    width={32}
                    height={32}
                  />
                </a>
              </h1>
            </div>
            <button
              id="header-nav-toggle"
              className="header-nav-toggle"
              aria-controls="primary-menu"
              aria-expanded="false"
            >
              <span className="screen-reader">Menu</span>
              <span className="hamburger">
                <span className="hamburger-inner" />
              </span>
            </button>
            <nav id="header-nav" className="header-nav">
              <div className="header-nav-inner">
                <ul className="list-reset text-xxs header-nav-right">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Users</a>
                  </li>
                  <li>
                    <a href="#">Showcase</a>
                  </li>
                </ul>
                <ul className="list-reset header-nav-right">
                  <li>
                    <Button label="Register"/>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
        </Fade>
    )
}
