import Carousel from './components/Carousel';
import { text } from './locale/locale';

export default function Home() {
  const carouselData = [
    {
      img: 'https://olinkirk.land/angelika-paints/assets/images/hero/1.webp',
      href: 'http://www.google.com',
      openInNewTab: true,
      title: text('hero.slide-1.title'),
      description: text('hero.slide-1.description'),
      ctas: [{ text: text('hero.slide-1.cta-1'), primary: true }]
    },
    {
      img: 'https://olinkirk.land/angelika-paints/assets/images/hero/2.webp',
      href: 'http://www.google.com',
      openInNewTab: true,
      title: text('hero.slide-2.title'),
      description: text('hero.slide-2.description'),
      ctas: [
        { text: text('hero.slide-2.cta-1'), primary: false },
        { text: text('hero.slide-2.cta-2'), primary: true }
      ]
    },
    {
      img: 'https://olinkirk.land/angelika-paints/assets/images/hero/3.webp',
      href: 'http://www.google.com',
      openInNewTab: true,
      title: text('hero.slide-3.title'),
      description: text('hero.slide-3.description'),
      ctas: [{ text: text('hero.slide-3.cta-1'), primary: false }]
    }
  ];

  return (
    <article>
      <div className="hero-container">
        <Carousel data={carouselData} />
      </div>

      <section>
        <span>{text('home.geschichten.overview')}</span>
      </section>

      <section>
        <h2>{text('home.about.title')}</h2>
        <p>{text('home.about.content-1')}</p>
        <p>{text('home.about.content-2')}</p>
        <p>{text('home.about.content-3')}</p>
      </section>

      <section>
        <h2>{text('home.services.label')}</h2>
        <span>{text('home.services.headline')}</span>
      </section>
    </article>
  );
}
