import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { currentLanguage, setAppLanguage, text } from '../locale/locale';
import Alert from './Alert';

export default function Nav() {
  const [language, setLanguage] = useState(currentLanguage);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setSize(window.innerWidth);
    });

    return () => {
      window.removeEventListener('resize', () => {
        setSize(window.innerWidth);
      });
    };
  }, []);

  useEffect(() => {
    document.querySelector('.nav-content > ul').style.transition = 'none';
    const timeout = setTimeout(() => {
      document.querySelector('.nav-content > ul').style.transition =
        'transform 0.3s';
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [size]);

  const onClickHamburger = () => {
    setShowMobileNav(!showMobileNav);
  };

  useEffect(() => {
    // body.no-scroll
    if (showMobileNav) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [showMobileNav]);

  useEffect(() => {
    document.addEventListener('click', (e) => {
      // If a dropdown is open and the click is outside of the dropdown, close it
      if (e.target.closest('.nav-content > ul')) {
        return;
      }

      const dropdowns = document.querySelectorAll('.dropdown--open');
      dropdowns.forEach((dropdown) => {
        if (!dropdown.contains(e.target)) {
          dropdown.classList.remove('dropdown--open');
        }
      });
    });
  }, []);

  return (
    <nav>
      <Alert
        text={text('promotion-banner')}
        icon="gift"
        onClick={() => {
          console.log('clicked');
        }}
      />

      <div className="nav-content">
        <Link to="/">
          <h1 className="logo">{text('title')}</h1>
        </Link>
        {showMobileNav && (
          <div className="shade" onClick={() => setShowMobileNav(false)}></div>
        )}
        <ul className={showMobileNav ? 'show-mobile-nav' : ''}>
          <li>
            <button className="link" onClick={openDropdown}>
              <i className="fas fa-chevron-down sm" />
              <span>{text('nav.studio.label')}</span>
            </button>
            <ul className="dropdown">
              <li>
                <Link to="/link">{text('nav.studio.about')}</Link>
              </li>
              <li>
                <Link to="/link">{text('nav.studio.tour')}</Link>
              </li>
            </ul>
          </li>

          <li>
            <button className="link" onClick={openDropdown}>
              <i className="fas fa-chevron-down sm" />
              <span>{text('nav.collections.label')}</span>
            </button>
            <ul className="dropdown">
              <li>
                <Link to="/link">{text('nav.collections.ideas')}</Link>
              </li>
              <li>
                <Link to="/link">{text('nav.collections.nature')}</Link>
              </li>
              <li>
                <Link to="/link">{text('nav.collections.tales')}</Link>
              </li>
            </ul>
          </li>

          <li>
            <button className="link" onClick={openDropdown}>
              <i className="fas fa-chevron-down sm" />
              <span>{text('nav.lessons.label')}</span>
            </button>
            <ul className="dropdown">
              <li>
                <Link to="/link">{text('nav.lessons.trial')}</Link>
              </li>
              <li>
                <Link to="/link">{text('nav.lessons.workshops')}</Link>
              </li>
              <li>
                <Link to="/link">{text('nav.lessons.private-lessons')}</Link>
              </li>
            </ul>
          </li>

          <li className="cta">
            <Link to="/link">
              <span>{text('nav.prints-and-commissions')}</span>
            </Link>
          </li>
          <li className="language-selector">
            <button className="link" onClick={openDropdown}>
              <i className="fas fa-chevron-down sm" />
              <span className="capitalize">{currentLanguage}</span>
              <i className="fas fa-globe-americas"></i>
            </button>
            <ul className="dropdown dropdown-align-right">
              <li>
                <button
                  className="link"
                  onClick={() => {
                    setAppLanguage('de');
                    window.location.reload();
                  }}
                >
                  DE
                </button>
              </li>
              <li>
                <button
                  className="link"
                  onClick={() => {
                    setAppLanguage('en');
                    window.location.reload();
                  }}
                >
                  EN
                </button>
              </li>
            </ul>
          </li>
        </ul>
        <button className={'hamburger btn-icon'} onClick={onClickHamburger}>
          <i className={`fas ${showMobileNav ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
    </nav>
  );
}

function openDropdown(e) {
  const targetEl = e.target.closest('button');
  const siblingEl = targetEl.nextElementSibling;

  // Close all dropdowns except for siblingEl
  const dropdowns = document.querySelectorAll('.dropdown--open');
  dropdowns.forEach((dropdown) => {
    if (dropdown !== siblingEl) {
      dropdown.classList.remove('dropdown--open');
    }
  });

  siblingEl.classList.toggle('dropdown--open');
}
