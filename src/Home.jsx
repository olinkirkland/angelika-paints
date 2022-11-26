import Carousel from './components/Carousel';
import { text } from './locale/locale';

export default function Home() {
  const carouselData = [
    {
      img: 'https://olinkirk.land/angelika-paints/assets/images/hero/1.webp',
      href: 'http://www.google.com',
      openInNewTab: true,
      title: 'Slide 1',
      description: 'This is the first slide',
      ctas: [{ text: 'Click here', primary: true }]
    },
    {
      img: 'https://olinkirk.land/angelika-paints/assets/images/hero/2.webp',
      href: 'http://www.google.com',
      openInNewTab: true,
      title: 'Slide 2',
      description: 'This is the second slide',
      ctas: [
        { text: 'Click here', primary: false },
        { text: 'Click here', primary: true }
      ]
    },
    {
      img: 'https://olinkirk.land/angelika-paints/assets/images/hero/3.webp',
      href: 'http://www.google.com',
      openInNewTab: true,
      title: 'Slide 3',
      description: 'This is the third slide',
      ctas: [{ text: 'Click here', primary: false }]
    }
  ];

  return (
    <article>
      {/* <div className="hero-container">
        <section id="hero">
          <h1 className="logo">{text('title')}</h1>
          <p>{text('hero-subtitle')}</p>
          <div className="button-bar">
            <button className="with-arrow">{text('hero-cta-1')}</button>
            <button className="with-arrow cta">{text('hero-cta-2')}</button>
          </div>
        </section>
      </div> */}
      <div className="hero-container">
        <Carousel data={carouselData} />
      </div>

      <section>
        <span>Mehrere Seiten - Mehrere “Geschichten” One Two Three…</span>
      </section>

      <section>
        <h2>{text('home-about-title')}</h2>
        <p>{text('home-about-content-1')}</p>
        <p>{text('home-about-content-2')}</p>
        <p>{text('home-about-content-3')}</p>
      </section>
      
      <section>
        <h2>Services</h2>
        <span>
          Headline: Gratis Schnupperstunde - jetzt buchen! Aufträge Unterricht
          Schnupperstunde buchen Unterrichts-Bündel-Preise (5er Stunden, 10er,
          20er) Workshops Events
        </span>
      </section>
    </article>
  );
}
