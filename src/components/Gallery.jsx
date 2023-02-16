import React from 'react';
import { getPagesUrl } from '../Util';

export default function Gallery({ entries }) {
  return (
    <section className="gallery">
      <div
        className="lightbox-container"
        onClick={() => {
          const lightbox = document.querySelector('.lightbox-container');
          lightbox.classList.remove('lightbox-container--visible');
        }}
      >
        <div className="lightbox__overlay"></div>
        <div className="lightbox">
          <img className="lightbox__image" src="" alt="" />
          <button
            className="lightbox__close"
            onClick={() => {
              const lightbox = document.querySelector('.lightbox-container');
              lightbox.classList.remove('lightbox-container--visible');
            }}
            type="button"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
      <ul>
        {entries.map((entry, index) => (
          <li className="gallery__item" key={index}>
            <img
              className="gallery__image"
              loading="lazy"
              onLoad={({ target }) => {
                target.classList.add('gallery__image--loaded');
              }}
              onClick={showLightbox.bind(this, entry)}
              src={getPagesUrl() + '/assets/images/gallery/' + entry.url}
              alt={getPagesUrl() + '/assets/images/gallery/' + entry.url}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

function showLightbox(entry) {
  const lightbox = document.querySelector('.lightbox-container');
  const lightboxImage = lightbox.querySelector('.lightbox__image');
  const url = getPagesUrl() + '/assets/images/gallery/' + entry.url;
  lightboxImage.src = url;
  lightboxImage.alt = url;

  lightbox.classList.add('lightbox-container--visible');
}
