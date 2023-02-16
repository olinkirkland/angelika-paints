import React from 'react';

export default function Gallery({ entries }) {
  return (
    <section className="gallery">
      <ul>
        {entries.map((entry, index) => (
          <li className="gallery__item" key={index}>
            <img
              className="gallery__image"
              src={'/assets/images/gallery/' + entry.url}
              alt={'/assets/images/gallery/' + entry.url}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
