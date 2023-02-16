import React from 'react';

import entries from '../../data/galleries/nature.json';
import Gallery from '../Gallery';

export default function NaturePage() {
  return (
    <article className="page page--collection page--collection--nature">
      <h1>Collection -- Nature</h1>
      <Gallery entries={entries} />
    </article>
  );
}
