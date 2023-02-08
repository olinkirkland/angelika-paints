import SocialLinks from './SocialLinks';
import NewsletterForm from './forms/NewsletterForm';
import { text } from '../locale/locale';

export default function Footer() {
  return (
    <footer>
      {/* <ContactForm /> */}
      <NewsletterForm />
      <section>
        <div className="social-container">
          <p>{text('footer.follow')}</p>
          <SocialLinks />
        </div>
        <ul className="site-map">
          <li>
            <h2>{text('footer.about.title')}</h2>
            <hr />
            <p>{text('footer.about.content')}</p>
          </li>
          <li>
            <h2>{text('footer.collections.title')}</h2>
            <hr />
            <ul>
              <li>
                <a href="/ideas">{text('footer.collections.ideas')}</a>
              </li>
              <li>
                <a href="/nature">{text('footer.collections.nature')}</a>
              </li>
              <li>
                <a href="/tales">{text('footer.collections.tales')}</a>
              </li>
            </ul>
          </li>
          <li>
            <h2>{text('footer.workshops-and-lessons.title')}</h2>
            <hr />
            <ul>
              <li>
                <a href="/trial">
                  {text('footer.workshops-and-lessons.trial')}
                </a>
              </li>
              <li>
                <a href="/workshops">
                  {text('footer.workshops-and-lessons.workshops')}
                </a>
              </li>
              <li>
                <a href="/private-lessons">
                  {text('footer.workshops-and-lessons.private-lessons')}
                </a>
              </li>
            </ul>
          </li>
          <li>
            <h2>{text('footer.contact.title')}</h2>
            <hr />
            <ul>
              <li>
                <i className="fas fa-envelope"></i>
                <a href={`mailto:${text('footer.contact.email')}`}>
                  {text('footer.contact.email')}
                </a>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <a href={`tel:${text('footer.contact.phone')}`}>
                  {text('footer.contact.phone')}
                </a>
              </li>

              <li>
                <i className="fas fa-map-marker-alt"></i>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${text(
                    'footer.contact.address'
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {text('footer.contact.address')}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <div className="bottom-footer">
        <section>
          <p>
            &copy; {new Date().getFullYear()} {text('title')}
          </p>
          <a href="/impressum" className="link">
            {text('footer.impressum')}
          </a>
        </section>
      </div>
    </footer>
  );
}
