import React from 'react';
import { text } from '../../locale/locale';

export default function PageNotFound() {
  return (
    <article className="page-not-found">
      <section>
        <h1>{text('page-not-found.title')}</h1>
        <p>{text('page-not-found.description')}</p>
      </section>
    </article>
  );
}
