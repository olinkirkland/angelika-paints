import React from 'react';
import { getPagesUrl } from '../Util';

export default function Gallery({ entries }) {
  return (
    <section className="gallery">
      <ul>
        {entries.map((entry, index) => (
          <li className="gallery__item" key={index}>
            <img
              className="gallery__image"
              src={getPagesUrl() + '/assets/images/gallery/' + entry.url}
              alt={getPagesUrl() + '/assets/images/gallery/' + entry.url}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
