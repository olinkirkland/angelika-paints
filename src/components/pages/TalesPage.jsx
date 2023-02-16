import React from 'react';
import entries from '../../data/galleries/tales.json';
import Gallery from '../Gallery';

export default function TalesPage() {
  return (
    <article className="page page--collection page--collection--tales">
      <h1>Collection -- Tales</h1>
      <Gallery entries={entries} />
    </article>
  );
}
