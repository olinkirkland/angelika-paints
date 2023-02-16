import React from 'react';

import entries from '../../data/galleries/ideas.json';
import Gallery from '../Gallery';

export default function IdeasPage() {
  return (
    <article className="page page--collection page--collection--ideas">
      <h1>Collection -- Ideas</h1>
      <Gallery entries={entries} />
    </article>
  );
}
